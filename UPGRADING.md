# Upgrading

## Upgrading from the Laravel 9/10 (spatie/enum) versions

This fork targets modern Laravel. Review the following before updating:

- **Requirements:** `php ^8.3` and `laravel/framework ^12.0 || ^13.0`.
- **Native enums replace `spatie/enum`.** `(string) ChatBoxPosition::bottomRight()` becomes `ChatBoxPosition::BottomRight->value`, `(string) AvatarStyle::micah()` becomes `AvatarStyle::Micah->value`, and `MessageType` cases are `Text` / `Document`. The backing values are unchanged (`'TEXT'`, `'DOCUMENT'`, `'micah'`, `'bottomRight'`, ...), so stored data, published configs and the JSON payloads keep working.
- **Avatars:** the DiceBear host is now `https://api.dicebear.com/9.x/{style}/svg` (the legacy `avatars.dicebear.com` host is dead). In `basement.avatar.options`, the `b` option is now `backgroundColor` and takes a bare hex value: `'b' => '%233584e4'` becomes `'backgroundColor' => '3584e4'`.
- **Tailwind CSS v4 class syntax** (only if you published or overrode the views): the `bm` prefix comes first and `!important` is a suffix. `bm-grid` -> `bm:grid`, `hover:bm-bg-blue-500` -> `bm:hover:bg-blue-500`, `!bm-block` -> `bm:block!`.
- **Import the CSS un-layered.** `@import '.../basement.bundle.min.css' layer(...)` nests Tailwind's layers and lets your own preflight override the widget.
- **JavaScript dependencies:** `laravel-echo@^2` and `pusher-js@^8` (previously `^1` / `^7`). pusher-js 8 throws unless every pusher-protocol connection (`pusher`, `ably`, `soketi`, ...) defines a `cluster` key; the shipped `config/basement.php` does, so compare it with your published copy.
- **`null` broadcaster connection** is now `'null' => ['broadcaster' => 'null']` because Laravel Echo 2 requires a `broadcaster` key. Update your published `config/basement.php` if it still contains `'null' => []`.
- **Guard `new Echo(...)`** on pages that do not render `<x-basement::chat-box />`: the echo options are read from that element and are an empty object elsewhere, which makes Echo 2 throw.
- **Broadcast drivers:** `laravel-websockets` (abandoned) was removed from `php artisan basement:install`; an existing `laravel-websockets` connection in your published config is still accepted. A `reverb` driver was added (`php artisan basement:install driver` runs `composer require laravel/reverb` and `reverb:install`).
- **Test harness:** the browser suite, CI workflow and devcontainer run against Laravel Reverb (`laravel/reverb` is a dev dependency) instead of soketi; `@soketi/soketi` and the `uWebSockets.js` override are gone from `package.json`. The `soketi` broadcast driver itself is still available to applications.
- **Route caching** (`php artisan route:cache`) is now supported.
- **Rate limiting:** the package registers a `throttle:api` fallback limiter (60 requests per minute per user/IP) when the application defines none. Define your own `api` limiter to override it.
- **Contributors:** the test suite runs on PHPUnit 11.5.50+ / 12 / 13 (13 needs PHP 8.4), orchestra/testbench 10 (Laravel 12) or 11 (Laravel 13); Feature/Unit tests no longer need a websocket server.
