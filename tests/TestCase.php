<?php

declare(strict_types=1);

namespace BasementChat\Basement\Tests;

use Illuminate\Support\Facades\Config;
use Orchestra\Testbench\Attributes\WithMigration;
use Orchestra\Testbench\TestCase as OrchestraTestCase;

#[WithMigration]
class TestCase extends OrchestraTestCase
{
    /**
     * Setup the test environment.
     */
    public function setUp(): void
    {
        parent::setUp();

        BasementTestCaseEnvironment::setFactories();
    }

    /**
     * Define environment setup.
     *
     * @param \Illuminate\Foundation\Application $app
     */
    public function getEnvironmentSetUp($app): void
    {
        BasementTestCaseEnvironment::setConfigurations();

        // Feature/Unit suites never need a live websocket server; BrowserTestCase keeps pusher.
        Config::set(key: 'broadcasting.default', value: 'null');
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
        BasementTestCaseEnvironment::setRoutes($router);
    }

    /**
     * Get package providers.
     *
     * @param \Illuminate\Foundation\Application $app
     * @return array<class-string>
     */
    protected function getPackageProviders($app): array
    {
        return BasementTestCaseEnvironment::getPackageProviders();
    }
}
