<?php

declare(strict_types=1);

use App\Models\User;
use BasementChat\Basement\Enums\AvatarStyle;
use BasementChat\Basement\Enums\ChatBoxPosition;

return [

    /*
    |--------------------------------------------------------------------------
    | Laravel Echo Broadcast Options
    |--------------------------------------------------------------------------
    |
    | Here is the configuration where you can set the options used on client-
    | side Laravel Echo. For server-side broadcasting options, please refer to
    | /config/broadcasting.php file. The "default" value below should be
    | available as an array key inside "connections".
    |
    */

    'broadcaster' => [
        'default' => env('BASEMENT_BROADCAST_DRIVER', 'null'),
        'connections' => [
            'pusher' => [
                'broadcaster' => 'pusher',
                'key' => env('PUSHER_APP_KEY'),
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'forceTLS' => true,
            ],
            'ably' => [
                'broadcaster' => 'pusher',
                'key' => env('ABLY_PUBLIC_KEY'),
                'cluster' => 'mt1',
                'wsHost' => 'realtime-pusher.ably.io',
                'wsPort' => 443,
                'enableStats' => false,
                'forceTLS' => true,
            ],
            'reverb' => [
                'broadcaster' => 'reverb',
                'key' => env('REVERB_APP_KEY'),
                'wsHost' => env('REVERB_HOST', '127.0.0.1'),
                'wsPort' => env('REVERB_PORT', 80),
                'wssPort' => env('REVERB_PORT', 443),
                'forceTLS' => (env('REVERB_SCHEME', 'https') === 'https'),
                'enabledTransports' => ['ws', 'wss'],
            ],
            'laravel-websockets' => [
                'broadcaster' => 'pusher',
                'key' => env('PUSHER_APP_KEY'),
                'cluster' => env('PUSHER_APP_CLUSTER', 'mt1'),
                'wsHost' => '127.0.0.1',
                'wsPort' => 6001,
                'forceTLS' => false,
                'enableStats' => false,
            ],
            'soketi' => [
                'broadcaster' => 'pusher',
                'key' => env('PUSHER_APP_KEY'),
                'cluster' => env('PUSHER_APP_CLUSTER', 'mt1'),
                'wsHost' => env('PUSHER_HOST'),
                'wsPort' => env('PUSHER_PORT'),
                'wssPort' => env('PUSHER_PORT'),
                'forceTLS' => false,
                'enableStats' => false,
                'enabledTransports' => ['ws', 'wss'],
            ],
            'null' => ['broadcaster' => 'null'],
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Chat Box Widget Position
    |--------------------------------------------------------------------------
    |
    | Configure where you want to place the chat box widget view. If you have
    | advanced configuration, feel free to publish the view and modify it as
    | you wish.
    |
    */

    'chat_box_widget_position' => ChatBoxPosition::BottomRight->value,

    /*
    |--------------------------------------------------------------------------
    | User Model
    |--------------------------------------------------------------------------
    |
    | Specify the namespace and class used to get the user model instance. The
    | given class must extend the "Illuminate\Foundation\Auth\User" and
    | implement the "BasementChat\Basement\Contracts\User".
    |
    */

    'user_model' => User::class,

    /*
    |--------------------------------------------------------------------------
    | Avatar
    |--------------------------------------------------------------------------
    |
    | You can change the avatar's appearance in the contact list according to
    | the styles available in https://www.dicebear.com/styles/. If you have other
    | avatar preferences (such as the user's real photo uploaded on your site),
    | you can override the "getAvatarAttribute" accessor function in your user
    | model.
    |
    */

    'avatar' => [
        'style' => AvatarStyle::Micah->value,
        'options' => [
            'backgroundColor' => '3584e4',
            'size' => 64,
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | Basement frontend uses API calls to get contacts and private messages
    | data. Here you can configure what middleware should be passed when
    | processing requests.
    |
    */

    'middleware' => [
        \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        'throttle:api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'auth:sanctum',
    ],

];
