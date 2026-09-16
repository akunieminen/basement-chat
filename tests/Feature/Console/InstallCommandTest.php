<?php

namespace BasementChat\Basement\Tests\Feature\Console;

use BasementChat\Basement\Factories\SymfonyProcessFactory;
use BasementChat\Basement\Tests\Fixtures\Factories\FakeSymfonyProcessFactory;
use BasementChat\Basement\Tests\TestCase;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use PHPUnit\Framework\Attributes\Test;
use Symfony\Component\Finder\SplFileInfo;

class InstallCommandTest extends TestCase
{
    /**
     * Setup the test environment.
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->app->bind(SymfonyProcessFactory::class, FakeSymfonyProcessFactory::class);
    }

    protected function tearDown(): void
    {
        File::deleteDirectory(public_path('vendor/basement'));
        File::cleanDirectory(database_path('migrations'));
        File::delete(config_path('basement.php'));

        parent::tearDown();
    }

    #[Test]
    public function itShouldBeAbleToPublishFilesWhenInstallingApp(): void
    {
        $this
            ->artisan('basement:install app')
            ->assertSuccessful()
            ->expectsConfirmation(
                'Do you want to install the broadcast driver? You can also do this later by calling <options=bold>basement:install driver</>.'
            )
            ->expectsConfirmation('Would you like to run the migrations now?');

        $this->assertFileExists(config_path('basement.php'));
        $this->assertFileExists(public_path('vendor/basement/basement.bundle.min.css'));
        $this->assertFileExists(public_path('vendor/basement/basement.bundle.min.js'));
        $this->assertFileExists(public_path('vendor/basement/basement.bundle.min.js.map'));

        $this->assertTrue(collect(File::files(database_path('migrations')))->some(
            static fn (SplFileInfo $file): bool => Str::endsWith($file->getFilename(), 'create_private_messages_table.php')
        ));
    }

    #[Test]
    public function itShouldFailIfTheGivenCommandIsNotAvailable(): void
    {
        $this
            ->artisan('basement:install fooBar')
            ->expectsOutput('The installation type should be one of following options (app, driver, frontend_deps)')
            ->assertFailed();
    }

    #[Test]
    public function itShouldCallComposerInstallCommandWhenInstallingDriver(): void
    {
        $this
            ->artisan('basement:install driver')
            ->assertSuccessful()
            ->expectsChoice(question: 'Please choose the broadcast driver you want to use', answer: 'pusher', answers: [
                'pusher',
                'ably',
                'soketi',
                'reverb',
            ])
            ->expectsOutputToContain('composer require pusher/pusher-php-server')
            ->expectsOutputToContain('Broadcast driver pusher has been installed!');
    }

    #[Test]
    public function itShouldCallNpmInstallCommandWhenInstallingFrontendDeps(): void
    {
        $this
            ->artisan('basement:install frontend_deps')
            ->assertSuccessful()
            ->expectsChoice(question: 'Which package manager do you want to use?', answer: 'npm', answers: [
                'npm',
                'yarn',
                'pnpm',
            ])
            ->expectsOutputToContain(
                'npm install @alpinejs/intersect@^3 alpinejs@^3 axios@^1 laravel-echo@^2 pusher-js@^8 --save-dev'
            )
            ->expectsOutputToContain('Frontend dependencies has been installed!');
    }
}
