<div align="center">
  <p><a href="https://github.com/basement-chat/basement-chat"><img src="./assets/basement-chat.svg" alt="Basement Chat Logo" height="60"/></a></p>
  <h1>Basement Chat</h1>
  <p>Add a real-time chat widget to your Laravel application.</p>
</div>

[basement-chat.webm](https://github.com/basement-chat/basement-chat/assets/52187958/2f2250ef-5578-412e-b0d7-2bb84c8b3c5a)

<div align="center">
  <p>
    <a href="https://github.com/basement-chat/basement-chat/actions/workflows/test.yml?query=branch%3Amain">
      <img alt="GitHub Workflow Test Status" src="https://img.shields.io/github/actions/workflow/status/basement-chat/basement-chat/test.yml?label=test&logo=github&style=flat&color=3a82f7&logoColor=white">
    </a>
    <a href="https://app.codecov.io/gh/basement-chat/basement-chat/">
      <img alt="Code Coverage" src="https://img.shields.io/codecov/c/github/basement-chat/basement-chat?color=white&logo=codecov&style=flat&logoColor=white">
    </a>
    <a href="https://packagist.org/packages/basement-chat/basement-chat">
      <img alt="Packagist Version" src="https://img.shields.io/packagist/v/basement-chat/basement-chat?color=3a82f7&logo=packagist&style=flat&logoColor=white">
    </a>
    <a href="https://github.com/basement-chat/basement-chat/blob/main/LICENSE.md">
      <img alt="Packagist License" src="https://img.shields.io/packagist/l/basement-chat/basement-chat?color=white&style=flat">
    </a>
    <a href="https://www.conventionalcommits.org/">
      <img alt="Semantic Release" src="https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release&color=3a82f7&style=flat&logoColor=white">
    </a>
  </p>
  <p>
    <img alt="Built for" src="https://img.shields.io/static/v1?label=built%20for&message=%20&color=white&style=flat&labelColor=white">
    <a href="https://github.com/basement-chat/basement-chat/blob/main/composer.json">
      <img alt="Packagist Laravel Version" src="https://img.shields.io/packagist/dependency-v/basement-chat/basement-chat/laravel/framework?logo=laravel&color=3a82f7&style=flat&logoColor=white">
    </a>
    <img alt="With" src="https://img.shields.io/static/v1?label=with&message=%20&color=white&style=flat&labelColor=white">
    <a href="https://github.com/basement-chat/basement-chat/blob/main/composer.json">
      <img alt="Packagist PHP Version" src="https://img.shields.io/packagist/dependency-v/basement-chat/basement-chat/php?logo=php&color=3a82f7&style=flat&logoColor=white">
    </a>
  </p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Configurations](#configurations)
- [Advanced Customizations](#advanced-customizations)
- [Extra Notes and Troubleshooting](#extra-notes-and-troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## Introduction

With this package, you can enhance user engagement, boost collaboration, and facilitate instant communication within your existing Laravel application by providing seamlessly integrated dynamic and interactive real-time chat widget functionality.

<details>
  <summary>Trivia</summary>

The Basement name was inspired by Aech's private chat room from [Ready Player One](https://readyplayerone.fandom.com/wiki/Basement).

</details>

## Features

- Real-time messages
- User's online status
- User's typing indicator
- Messages have been read status
- Configurable push notifications from the client side
- Searchable contacts and messages
- Extendable and customizable actions behavior
- Lazy loading with infinite scroll messages
- Intuitive and attractive design using TailwindCSS and Alpine.js
- Can be used with various CSS frontend frameworks such as Bootstrap and TailwindCSS without worrying about style conflicts
- Flexible broadcast driver support, [Pusher](https://pusher.com/), [Ably](https://ably.com/), [Laravel Reverb](https://reverb.laravel.com/), [Soketi](https://docs.soketi.app/), or any other Laravel supported broadcast driver, it's up to you to decide.

## Demo

[Here is a demo](https://github.com/basement-chat/demo) with scaffolding using Laravel Breeze.

## Installation

### Requirements:

- Server-side: `php ^8.3` and `laravel/framework ^12.0 || ^13.0` installed in your project.
- Client-side: `chrome >= 111`, `edge >= 111`, `firefox >= 128`, `safari >= 16.4`, or equivalent (the browsers supported by Tailwind CSS v4). See details [here](https://browsersl.ist/#q=chrome+%3E%3D+111%2C+edge+%3E%3D+111%2C+firefox+%3E%3D+128%2C+safari+%3E%3D+16.4).

### Installation steps:

- Open a terminal, and make sure you are in your Laravel project directory.
- Install this package using the following command:
  ```
  composer require basement-chat/basement-chat
  ```
- Start integrating Basement Chat with your Laravel application:
  ```
  php artisan basement:install
  ```
  > The above command will publish the configuration, assets, and migration files to your Laravel application. On the other hand, it will also ask interactive questions for you to run the database migrations and ask you to install which broadcast driver you will use.
- Selecting a broadcast driver

  Before selecting a broadcast driver, you need to ensure that broadcasting is enabled. On Laravel 11+, you can install broadcasting support using:

  ```
  php artisan install:broadcasting
  ```

  Then you can select one of the following drivers:

  > If you accidentally missed installing the driver in the previous step, you can install it again using the `php artisan basement:install driver` command.
  - <details>
      <summary><a href="https://pusher.com/">Pusher</a> (Click here to expand)</summary>

    After creating a new channel in the Pusher account, you need to configure Laravel `.env` by providing the relevant configurations:

    ```ini
    BASEMENT_BROADCAST_DRIVER=pusher
    BROADCAST_CONNECTION=pusher
    PUSHER_APP_ID=<replace-with-your-pusher-app-id>
    PUSHER_APP_KEY=<replace-with-your-pusher-key>
    PUSHER_APP_SECRET=<replace-with-your-pusher-secret>
    PUSHER_APP_CLUSTER=<replace-with-your-pusher-cluster>
    ```

    </details>

  - <details>
      <summary><a href="https://reverb.laravel.com/">Laravel Reverb</a> (Click here to expand)</summary>

    Laravel Reverb is Laravel's first-party WebSocket server. After installing Reverb, configure your `.env`:

    ```ini
    BASEMENT_BROADCAST_DRIVER=reverb
    BROADCAST_CONNECTION=reverb
    REVERB_APP_ID=<replace-with-your-reverb-app-id>
    REVERB_APP_KEY=<replace-with-your-reverb-key>
    REVERB_APP_SECRET=<replace-with-your-reverb-secret>
    REVERB_HOST=127.0.0.1
    REVERB_PORT=8080
    REVERB_SCHEME=http
    ```

    Then, keep the Reverb server running:

    ```
    php artisan reverb:start
    ```

    </details>

  - <details>
      <summary><a href="https://ably.com/">Ably</a> (Click here to expand)</summary>

    Provide relevant configurations in your `.env` after creating a new app in your Ably account:

    ```ini
    BASEMENT_BROADCAST_DRIVER=ably
    BROADCAST_CONNECTION=ably
    ABLY_KEY=<replace-with-your-ably-key>
    ABLY_PUBLIC_KEY=<replace-with-your-ably-public-key>
    ```

    </details>

  - <details>
      <summary><a href="https://docs.soketi.app/">Soketi</a> (Click here to expand)</summary>

    Configure your `.env` first with the following configuration:

    ```ini
    BASEMENT_BROADCAST_DRIVER=soketi
    BROADCAST_CONNECTION=pusher
    PUSHER_APP_ID=app-id
    PUSHER_APP_KEY=app-key
    PUSHER_APP_SECRET=app-secret
    PUSHER_HOST=127.0.0.1
    PUSHER_PORT=6001
    PUSHER_SCHEME=http
    ```

    Then, keep the Soketi server running with the following command when you want to use chat features in your app:

    ```
    npx soketi start
    ```

    </details>

- Configure your Sanctum Stateful Domains

  Since this package uses [Laravel Sanctum](https://laravel.com/docs/12.x/sanctum) as the primary authentication system, you will need to configure your `.env` to use the equivalent `SANCTUM_STATEFUL_DOMAINS` with the domain you are currently using:

  ```
  SANCTUM_STATEFUL_DOMAINS=<your-app-domain>
  ```

  > Example: `basement.up.railway.app`, `127.0.0.1:8080`

- Implements Basement Chat functionality to your user model

  In your user model (by default uses `app/Models/User.php`), modify it so it implements `BasementChat\Basement\Contracts\User` and uses `BasementChat\Basement\Traits\HasPrivateMessages` trait

  ```diff
  <?php

  namespace App\Models;

  + use BasementChat\Basement\Contracts\User as BasementUserContract;
  + use BasementChat\Basement\Traits\HasPrivateMessages;

  ...

  - class User extends Authenticatable
  + class User extends Authenticatable implements BasementUserContract
  {
  +     use HasPrivateMessages;

        ...
  }
  ```

- Loading the Basement Chat component into your views

  To add a chat box component, load it in the `.blade` view file **where the user is already logged in**. For example, if you use Laravel Breeze, the path should be in `resources/views/layouts/app.blade.php`. Then, add the `<x-basement::chat-box />` line before the closing `</body>` tag.

  ```diff
  <!DOCTYPE html>
  <html lang="en">
  <head>
    ...
  </head>
  <body>
    ...

  + <x-basement::chat-box />
  </body>
  </html>
  ```

- Choosing how you use frontend assets

  There are two ways to use the frontend assets of this package. You can use one of the following:

  - <details>
      <summary>Use pre-bundled assets via the <code>link</code> and <code>script</code> tags directly</summary>

    This is the simplest way to integrate Basement Chat frontend assets with your existing Laravel application. Note that this bundle also sets the following packages to your global `window` object:

    - `window.Alpine`
    - `window.axios`
    - `window.Pusher`
    - `window.Echo`

    In the same file as the previous step that added the chat box component, you need to load the Basement Chat `.css` and `.js` files:

    ```diff
    <!DOCTYPE html>
    <html lang="en">
    <head>
        ...

    +    <link rel="stylesheet" href="{{ asset('vendor/basement/basement.bundle.min.css') }}">
    </head>
    <body>
        ...

       <x-basement::chat-box />
    +  <script src="{{ asset('vendor/basement/basement.bundle.min.js') }}"></script>
    </body>
    </html>
    ```

    </details>

  - <details>
      <summary>More robust approach by importing into a bundle</summary>

    You can also import the Basement Chat library as a module into your own `.js` file and bundle it yourself.

    - First, make sure you assign the following packages to the global `window` object:
      - `alpinejs@^3` with `@alpinejs/intersect@^3` plugin as `window.Alpine`
      - `axios@^1` as `window.axios`
      - `laravel-echo@^2` as `window.Echo`
      - `pusher-js@^8` as `window.Pusher`
        > To automatically install the above dependencies you can use the following command:
        >
        > ```
        > php artisan basement:install frontend_deps
        > ```
    - Then, you need to import the following modules:
      - `vendor/basement-chat/basement-chat/dist/basement.bundle.min.css`
        > Import the stylesheet un-layered; `@import ... layer(...)` nests Tailwind's layers and your own preflight will override the widget.
      - `vendor/basement-chat/basement-chat/dist/basement.plugin.esm` as an Alpine.js plugin
      - `vendor/basement-chat/basement-chat/dist/basement.echo-options.esm` as a Laravel Echo argument
        > You can change the `.esm` suffix to `.common` if you are using cjs module instead of esm.
    - A fully working example inside `resources/js/app.js` would be like the following:

      ```js
      import '../../vendor/basement-chat/basement-chat/dist/basement.bundle.min.css'
      import axios from 'axios'
      import Pusher from 'pusher-js'
      import Echo from 'laravel-echo'
      import Alpine from 'alpinejs'
      import intersect from '@alpinejs/intersect'
      import echoOptions from '../../vendor/basement-chat/basement-chat/dist/basement.echo-options.esm'
      import basement from '../../vendor/basement-chat/basement-chat/dist/basement.plugin.esm'

      window.axios = axios

      window.Pusher = Pusher
      window.Echo = new Echo(echoOptions)

      window.Alpine = Alpine
      window.Alpine.plugin(intersect)
      window.Alpine.plugin(basement)
      window.Alpine.start()
      ```

      > `echoOptions` is read from the `<x-basement::chat-box />` element, so it is an empty object on pages that do not render the widget. Laravel Echo 2 throws when the `broadcaster` key is missing (this is also why the default `null` connection is `['broadcaster' => 'null']`), so guard the call if your bundle is loaded on such pages, e.g. `if (document.querySelector('.basement-chat-box')) window.Echo = new Echo(echoOptions)`.

    </details>

## Configurations

This package publishes a `config/basement.php` configuration file and offers options to configure `broadcaster`, `chat_box_widget_position`, `user_model`, `avatar`, and `middleware`. See this [file](./config/basement.php) for more detailed information on what you can configure.

Options backed by enums take the native PHP enum's backing value, and the `null` broadcaster (the default when `BASEMENT_BROADCAST_DRIVER` is not set) must be declared as `['broadcaster' => 'null']` because Laravel Echo 2 requires a `broadcaster` key:

```php
use BasementChat\Basement\Enums\AvatarStyle;
use BasementChat\Basement\Enums\ChatBoxPosition;

return [
    'broadcaster' => [
        'default' => env('BASEMENT_BROADCAST_DRIVER', 'null'),
        'connections' => [
            // ...
            'null' => ['broadcaster' => 'null'],
        ],
    ],

    'chat_box_widget_position' => ChatBoxPosition::BottomRight->value,

    'avatar' => [
        'style' => AvatarStyle::Micah->value,
        'options' => [
            'backgroundColor' => '3584e4',
            'size' => 64,
        ],
    ],

    // ...
];
```

## Advanced Customizations

Other than configuring through the `config/basement.php` file, you can customize further by changing the class implementation or overriding the default method. Let's explore some of the use cases you can do with this feature:

### Changing the name shown in the contacts

By default, the Basement Chat package will display the user's full name in your contacts list. If you want to show the last name instead, you can override the `getNameAttribute` as in the following example:

```php
<?php

namespace App\Models;

use BasementChat\Basement\Contracts\User as BasementUserContract;
use BasementChat\Basement\Traits\HasPrivateMessages;

class User extends Authenticatable implements BasementUserContract
{
    use HasPrivateMessages;

    ...

    /**
     * Get the user's last name instead of the user's full name.
     */
    public function getNameAttribute(): string
    {
        return str($this->attributes['name'])->explode(' ')->last();
    }
}
```

### Using custom avatars

By default avatars are generated by [DiceBear](https://www.dicebear.com/styles/) (`https://api.dicebear.com/9.x/{style}/svg`): pick a style with `basement.avatar.style` and pass any DiceBear query option (for example `backgroundColor` or `size`) through `basement.avatar.options`. Like when you are changing the name shown in the contacts, you can also override the default `getAvatarAttribute` to change your contact's avatar.

```php
<?php

namespace App\Models;

use BasementChat\Basement\Contracts\User as BasementUserContract;
use BasementChat\Basement\Traits\HasPrivateMessages;

class User extends Authenticatable implements BasementUserContract
{
    use HasPrivateMessages;

    ...

    /**
     * Get the user's avatar url.
     */
    public function getAvatarAttribute(): string
    {
        return $this->attributes['image_url'];
    }
}
```

### Providing the chat feature to specific users

Instead of providing the chat feature to all available users, you can also conditionally provide the chat feature to specific users. For example, if you are using [spatie/laravel-permission](https://github.com/spatie/laravel-permission) and want to provide a chat feature only for the `administrator` role:

```php
// app/Actions/AllContacts.php
<?php

namespace App\Actions;

use App\Models\User;
use BasementChat\Basement\Actions\AllContacts as BasementAllContactsAction;
use BasementChat\Basement\Data\ContactData;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Builder as EloquentBuilder;
use Illuminate\Database\Eloquent\Collection as EloquentCollection;
use Illuminate\Support\Collection;

class AllContacts extends BasementAllContactsAction
{
    /**
     * Extend and override the default method for getting all contacts.
     * Only users with the administrator role will appear in the contact list.
     */
    public function all(Authenticatable $user): Collection
    {
        /** @var EloquentCollection<int,User> $contacts */
        $contacts = User::addSelectLastPrivateMessageId($user)
            ->addSelectUnreadMessages($user)
            ->whereHas('roles', function (EloquentBuilder $query): void {
                $query->where('name', 'administrator');
            })
            ->get();

        $contacts->append('avatar');
        $contacts->load('lastPrivateMessage');

        return $contacts
            ->sortByDesc('lastPrivateMessage.id')
            ->values()
            ->map(fn (Authenticatable $contact): ContactData => $this->convertToContactData($contact));
    }
}
```

```php
// app/Providers/AppServiceProvider.php
<?php

namespace App\Providers;

use App\Actions\AllContacts;
use BasementChat\Basement\Basement;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    ...

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Override the default action with your customized AllContacts action.
        Basement::allContactsUsing(AllContacts::class);
    }
}
```

> The following is a list of functions that you can use to override other actions and models:
>
> ```php
> Basement::useUserModel(User::class);
> Basement::usePrivateMessageModel(PrivateMessage::class);
> PrivateMessage::observe(PrivateMessageObserver::class);
>
> Basement::allContactsUsing(AllContacts::class);
> Basement::allPrivateMessagesUsing(AllPrivateMessages::class);
> Basement::markPrivateMessagesAsReadUsing(MarkPrivatesMessagesAsRead::class);
> Basement::sendPrivateMessagesUsing(SendPrivateMessage::class);
> ```

```html
<!-- resources/views/layouts/app.blade.php -->
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...

    <!-- The chat box component button will only be available if the current user is an administrator -->
    @role('administrator')
      <x-basement::chat-box />
    @endrole
  </body>
</html>
```

### Customizing view styles

It is also possible to customize the view style. The views use Tailwind CSS v4 classes with the `bm` prefix: the prefix always comes first (`bm:grid`, `bm:hidden`, `bm:hover:bg-blue-500`) and `!important` is a suffix (`bm:block!`). For example, you can do the following steps to change the color of the header and icon of a chat box component:

- Publish views with the following command:
  ```
  php artisan vendor:publish --tag=basement-views
  ```
- Open the `resources/views/vendor/basement/components/organisms/header.blade.php` file, and add the style attribute like the following:
  ```diff
  <header {{ $attributes->merge([
    'class' => 'bm:grid bm:grid-cols-5 bm:border-b bm:border-gray-300 bm:p-3 bm:bg-blue-500 bm:text-white bm:rounded-t-md',
  + 'style' => 'background-color: cornflowerblue;',
  ]) }}>
    ...
  </header>
  ```
- Open the `resources/views/vendor/basement/chat-box.blade.php` file, and add text color style:

  ```diff
  <div class="basement">
    <div ...>

      <button
  +     style="color: cornflowerblue"
        x-on:click="isMinimized = false"
        x-bind:class="isMinimized === true ? '' : 'bm:hidden'"
        x-bind:data-title="totalUnreadMessages === 0 ? 'Open chat box' : `There are ${totalUnreadMessages} unread messages`"
        class="basement-chat-box__open-button bm:w-full bm:h-full bm:rounded-full bm:text-blue-500 bm:border bm:bg-white bm:transition bm:duration-500 bm:hover:text-white bm:hover:bg-blue-500 bm:shadow-lg">
        ...
      </button>

      ...
    </div>
  </div>
  ```

## Extra Notes and Troubleshooting

### Updating package

When you are using pre-bundled assets. Every time after updating this package with `composer update`, you need to keep your assets file up to date using the following command:

```
php artisan vendor:publish --tag=basement-assets --force
```

Alternatively, to run the above command automatically after the `update` command is executed, you can configure `composer.json` by adding it to the `post-update-cmd` scripts:

```diff
"scripts": {
  "post-update-cmd": [
    "@php artisan vendor:publish --tag=laravel-assets --ansi --force",
+   "@php artisan vendor:publish --tag=basement-assets --ansi --force"
  ]
},
```

### Fixing Vite memory leaks

When you are using the Vite development server and get very high memory usage, you can configure your `vite.config.js` to ignore watching the vendor folder like the following example:

```diff
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
+  server: {
+    watch: {
+      ignored: [
+        './vendor/**',
+      ],
+    },
+  },
});
```

### Route caching

Route caching (`php artisan route:cache`) is supported: the broadcast channel authorization callbacks are registered by the service provider rather than through a cached route file.

## Roadmap

Please visit the [following page](https://github.com/basement-chat/basement-chat/projects) to view the Basement Chat roadmap.

## Contributing

You can check detailed information about the contributing guide on the [following page](./CONTRIBUTING.md).

## License

The Basement Chat package is licensed under the [MIT license](./LICENSE.md).
