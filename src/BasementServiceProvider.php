<?php

declare(strict_types=1);

namespace BasementChat\Basement;

use App\Models\User;
use BasementChat\Basement\Actions\AllContacts;
use BasementChat\Basement\Actions\AllPrivateMessages;
use BasementChat\Basement\Actions\MarkPrivatesMessagesAsRead;
use BasementChat\Basement\Actions\SendPrivateMessage;
use BasementChat\Basement\Console\InstallCommand;
use BasementChat\Basement\Contracts\Basement as BasementContract;
use BasementChat\Basement\Models\PrivateMessage;
use BasementChat\Basement\Observers\PrivateMessageObserver;
use BasementChat\Basement\View\Components\ChatBox;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Spatie\LaravelPackageTools\Package;
use Spatie\LaravelPackageTools\PackageServiceProvider;

class BasementServiceProvider extends PackageServiceProvider
{
    public function configurePackage(Package $package): void
    {
        $package
            ->name('basement')
            ->hasConfigFile()
            ->hasMigration('create_private_messages_table')
            ->hasRoute('api')
            ->hasViews()
            ->hasCommand(InstallCommand::class);
    }

    public function register(): void
    {
        parent::register();

        $this->app->singleton(abstract: BasementContract::class, concrete: static fn (): Basement => new Basement());
    }

    public function boot(): void
    {
        parent::boot();

        // Channel callbacks live in the BroadcastManager, not the route cache, so they must be
        // registered unconditionally (loadRoutesFrom() skips them when routes are cached).
        require __DIR__ . '/../routes/channels.php';

        if (RateLimiter::limiter('api') === null) {
            RateLimiter::for('api', static fn (Request $request): Limit => Limit::perMinute(60)
                ->by($request->user()?->getAuthIdentifier() ?: $request->ip()));
        }

        $this->configurePublishableFiles();
        $this->configureModels();
        $this->configureActions();
        $this->configureRouteModelBindings();
        $this->configureBladeComponents();
    }

    protected function configurePublishableFiles(): void
    {
        if ($this->app->runningInConsole() === false) {
            return;
        }

        $this->publishes(paths: [
            __DIR__ . '/../dist/basement.bundle.min.css' => public_path('vendor/basement/basement.bundle.min.css'),
            __DIR__ . '/../dist/basement.bundle.min.js' => public_path('vendor/basement/basement.bundle.min.js'),
            __DIR__ . '/../dist/basement.bundle.min.js.map' => public_path('vendor/basement/basement.bundle.min.js.map'),
        ], groups: 'basement-assets');
    }

    protected function configureModels(): void
    {
        Basement::useUserModel(config(key: 'basement.user_model', default: User::class));
        Basement::usePrivateMessageModel(PrivateMessage::class);

        PrivateMessage::observe(PrivateMessageObserver::class);
    }

    protected function configureActions(): void
    {
        Basement::allContactsUsing(AllContacts::class);
        Basement::allPrivateMessagesUsing(AllPrivateMessages::class);
        Basement::markPrivateMessagesAsReadUsing(MarkPrivatesMessagesAsRead::class);
        Basement::sendPrivateMessagesUsing(SendPrivateMessage::class);
    }

    protected function configureRouteModelBindings(): void
    {
        Route::bind('contact', static fn (string|int $value) => Basement::newUserModel()->findOrFail($value));
    }

    protected function configureBladeComponents(): void
    {
        Blade::component('basement::chat-box', ChatBox::class);
    }
}
