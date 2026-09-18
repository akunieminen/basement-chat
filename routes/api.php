<?php

declare(strict_types=1);

use BasementChat\Basement\Http\Controllers\Api\ContactController;
use BasementChat\Basement\Http\Controllers\Api\CurrentlyTypingController;
use BasementChat\Basement\Http\Controllers\Api\PrivateMessageController;
use Illuminate\Support\Facades\Route;

/** @var array<int,string> $middleware */
$middleware = config('basement.middleware', [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
    'auth:sanctum',
]);

Route::middleware($middleware)->name('api.basement.')->prefix('api/basement')->group(static function (): void {
    Route::apiResource(name: 'contacts', controller: ContactController::class)
        ->only('index');

    Route::apiResource(name: 'contacts.private-messages', controller: PrivateMessageController::class)
        ->shallow()
        ->only(['index', 'store']);

    // Typing signals get their own bucket so they never eat the shared "api" budget.
    Route::get(uri: 'contacts/{contact}/currently-typing', action: CurrentlyTypingController::class)
        ->withoutMiddleware('throttle:api')
        ->middleware('throttle:30,1,basement-typing')
        ->name('contacts.currently-typing');

    Route::patch(uri: 'private-messages', action: [PrivateMessageController::class, 'updates'])
        ->name('private-messages.updates');
});
