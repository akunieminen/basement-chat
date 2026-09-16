<?php

declare(strict_types=1);

namespace BasementChat\Basement\Console;

use BasementChat\Basement\Support\InstallComposerDependency;
use BasementChat\Basement\Support\InstallNodeDependency;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Process;

use function Illuminate\Support\artisan_binary;
use function Illuminate\Support\php_binary;

class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'basement:install
        {type=app : The installation type (app, driver, frontend_deps)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install the Basement package';

    /**
     * The supported installation types.
     *
     * @var array<int, string>
     */
    protected array $types = [
        'app',
        'driver',
        'frontend_deps',
    ];

    /**
     * List of supported broadcast drivers.
     *
     * @var array<int,string>
     */
    protected array $drivers = [
        'pusher',
        'ably',
        'soketi',
        'reverb',
    ];

    /**
     * List of console styles.
     *
     * @var array<string,string>
     */
    protected array $styles = [
        'code' => '<options=bold>%s</>',
    ];

    /**
     * Create a new console command instance.
     */
    public function __construct(
        protected InstallComposerDependency $composerDependency,
        protected InstallNodeDependency $nodeDependency,
    ) {
        parent::__construct();
    }

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        /** @var string $type */
        $type = $this->argument('type');
        $types = collect($this->types);

        if ($types->contains($type) === false) {
            $this->error("The installation type should be one of following options ({$types->implode(', ')})");

            return Command::INVALID;
        }

        return match ($type) {
            'app' => $this->installApp(),
            'driver' => $this->installDriver(),
            'frontend_deps' => $this->installFrontendDependencies(),
            default => Command::INVALID,
        };
    }

    /**
     * Execute command to publish files, ask to run migrations and install broadcast driver.
     */
    protected function installApp(): int
    {
        $this->call(command: 'vendor:publish', arguments: ['--tag' => 'basement-config']);
        $this->call(command: 'vendor:publish', arguments: ['--tag' => 'basement-migrations']);
        $this->call(command: 'vendor:publish', arguments: ['--tag' => 'basement-assets']);

        $this->info('Basement Chat Application has been installed!');

        if ($this->confirm('Do you want to install the broadcast driver? You can also do this later by calling ' . sprintf($this->styles['code'], 'basement:install driver') . '.')) {
            return $this->installDriver();
        }

        if ($this->confirm('Would you like to run the migrations now?')) {
            $this->call('migrate');
        }

        return Command::SUCCESS;
    }

    /**
     * Execute command to install broadcast driver.
     */
    protected function installDriver(): int
    {
        /** @var string $driver */
        $driver = $this->choice(
            question: 'Please choose the broadcast driver you want to use',
            choices: $this->drivers,
        );

        $installationStatus = match ($driver) {
            'pusher' => $this->composerDependency->install(command: $this, dependencies: ['pusher/pusher-php-server']),
            'ably' => $this->composerDependency->install(command: $this, dependencies: ['ably/ably-php']),
            'soketi' => (function () {
                $nodeDependencyInstallationStatus = $this->nodeDependency->install(
                    command: $this,
                    dependencies: ['@soketi/soketi'],
                );

                $composerDependencyInstallationStatus = $this->composerDependency->install(
                    command: $this,
                    dependencies: ['pusher/pusher-php-server'],
                );

                if (
                    $nodeDependencyInstallationStatus === Command::SUCCESS
                    && $composerDependencyInstallationStatus === Command::SUCCESS
                ) {
                    return Command::SUCCESS;
                }

                return Command::FAILURE;
            })(),
            'reverb' => $this->composerDependency->install(command: $this, dependencies: ['laravel/reverb']) === Command::SUCCESS
                // reverb:install lives in the package just required, so run it in a fresh process (as install:broadcasting does)
                && Process::forever()->run([php_binary(), artisan_binary(), 'reverb:install'], fn (string $type, string $output) => $this->output->write($output))->successful()
                    ? Command::SUCCESS
                    : Command::FAILURE,
            default => Command::INVALID,
        };

        if ($installationStatus !== Command::SUCCESS) {
            return $installationStatus;
        }

        $this->info("Broadcast driver {$driver} has been installed! Don't forget to configure your application environment.");

        return Command::SUCCESS;
    }

    /**
     * Execute command to install frontend node module dependencies.
     */
    protected function installFrontendDependencies(): int
    {
        $installationStatus = $this->nodeDependency->install(
            command: $this,
            dependencies: [
                '@alpinejs/intersect@^3',
                'alpinejs@^3',
                'axios@^1',
                'laravel-echo@^2',
                'pusher-js@^8',
            ],
            dev: true
        );

        if ($installationStatus !== Command::SUCCESS) {
            return $installationStatus;
        }

        $this->info('Frontend dependencies has been installed!');

        return Command::SUCCESS;
    }
}
