<?php

declare(strict_types=1);

namespace BasementChat\Basement\Tests;

use BasementChat\Basement\Tests\Fixtures\Models\User;
use Illuminate\Broadcasting\BroadcastServiceProvider;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\File;
use Orchestra\Testbench\Attributes\WithMigration;
use Orchestra\Testbench\Dusk\Options;
use Orchestra\Testbench\Dusk\TestCase as OrchestraDuskTestCase;

#[WithMigration]
class BrowserTestCase extends OrchestraDuskTestCase
{
    /**
     * Setup the test environment.
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->defineDatabaseMigrations();
        $this->publishAssets();

        BasementTestCaseEnvironment::setFactories();
        Options::withoutUI();
        Options::noSandbox();
    }

    /**
     * Define environment setup.
     *
     * @param \Illuminate\Foundation\Application $app
     */
    public function getEnvironmentSetUp($app): void
    {
        $this->defineRoutes($app['router']);

        BasementTestCaseEnvironment::setConfigurations();

        // `testbench package:test` hands BROADCAST_CONNECTION=log to phpunit and phpunit.xml cannot override it
        // (no force="true"); the browser suite needs the real pusher/soketi path in the test AND the served app.
        Config::set(key: 'broadcasting.default', value: 'pusher');
        Config::set(key: 'app.key', value: 'base64:IDrlmrVwu65iBhbUpPq3fsv7kybcnfUFZmY1wk+mamE=');
        Config::set(key: 'auth.providers.users.model', value: User::class);
        Config::set(key: 'database.connections.sqlite.database', value: database_path('database.sqlite'));
        Config::set(key: 'view.cache', value: false);
        Config::set(key: 'view.paths', value: [
            resource_path('views'),
            __DIR__ . '/../resources/views',
            __DIR__ . '/Fixtures/Views',
        ]);
    }

    /**
     * Define database migrations.
     */
    protected function defineDatabaseMigrations(): void
    {
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
    }

    /**
     * Define routes setup.
     *
     * @param  \Illuminate\Routing\Router  $router
     */
    protected function defineRoutes($router): void
    {
        Broadcast::routes();
        BasementTestCaseEnvironment::setRoutes($router);

        $router
            ->get(uri: '/dashboard', action: static fn (): View => view('dashboard'))
            ->middleware('web')
            ->name('dashboard');
    }

    /**
     * Get package providers.
     *
     * @param \Illuminate\Foundation\Application $app
     * @return array<class-string>
     */
    protected function getPackageProviders($app): array
    {
        return [
            ...BasementTestCaseEnvironment::getPackageProviders(),
            BroadcastServiceProvider::class,
        ];
    }

    /**
     * Run command to bundled and publish public asset files.
     */
    protected function publishAssets(): void
    {
        File::cleanDirectory(public_path('vendor/basement'));
        Artisan::call(command: 'vendor:publish', parameters: [
            '--tag' => 'basement-assets',
        ]);
    }
}
