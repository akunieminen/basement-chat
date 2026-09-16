<?php

declare(strict_types=1);

namespace BasementChat\Basement;

use BasementChat\Basement\Contracts\AllContacts;
use BasementChat\Basement\Contracts\AllPrivateMessages;
use BasementChat\Basement\Contracts\Basement as BasementContract;
use BasementChat\Basement\Contracts\MarkPrivatesMessagesAsRead;
use BasementChat\Basement\Contracts\SendPrivateMessage;
use BasementChat\Basement\Contracts\User as UserContract;
use BasementChat\Basement\Enums\AvatarStyle;
use BasementChat\Basement\Enums\ChatBoxPosition;
use BasementChat\Basement\Models\PrivateMessage;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Basement implements BasementContract
{
    protected static mixed $userModel;

    protected static mixed $privateMessageModel;

    public static function useUserModel(mixed $class): void
    {
        static::$userModel = $class;
    }

    /**
     * @return class-string<Authenticatable>&class-string<UserContract>
     */
    public static function userModel(): string
    {
        if (
            is_string(static::$userModel) === false
            || class_exists(static::$userModel) === false
            || is_subclass_of(static::$userModel, Authenticatable::class) === false
            || is_subclass_of(static::$userModel, UserContract::class) === false
        ) {
            throw new \TypeError(
                'The given configuration user_model should be a subclass of ' . Authenticatable::class .
                ' class and implement the ' . UserContract::class . ' interface.',
            );
        }

        return static::$userModel;
    }

    /**
     * @return Authenticatable&UserContract
     */
    public static function newUserModel(): Authenticatable
    {
        return app(static::userModel());
    }

    public static function usePrivateMessageModel(mixed $class): void
    {
        static::$privateMessageModel = $class;
    }

    /**
     * @return class-string<PrivateMessage>
     */
    public static function privateMessageModel(): string
    {
        if (
            is_string(static::$privateMessageModel) === false
            || class_exists(static::$privateMessageModel) === false
            || (is_subclass_of(static::$privateMessageModel, PrivateMessage::class) === false
                && static::$privateMessageModel !== PrivateMessage::class)
        ) {
            throw new \TypeError(
                'The given private message model should be a subclass of ' . PrivateMessage::class . ' class.',
            );
        }

        return static::$privateMessageModel;
    }

    public static function newPrivateMessageModel(): PrivateMessage
    {
        return app(static::privateMessageModel());
    }

    /**
     * @param class-string<AllContacts> $class
     */
    public static function allContactsUsing(string $class): void
    {
        app()->bind(abstract: AllContacts::class, concrete: $class);
    }

    /**
     * @param class-string<AllPrivateMessages> $class
     */
    public static function allPrivateMessagesUsing(string $class): void
    {
        app()->bind(abstract: AllPrivateMessages::class, concrete: $class);
    }

    /**
     * @param class-string<MarkPrivatesMessagesAsRead> $class
     */
    public static function markPrivateMessagesAsReadUsing(string $class): void
    {
        app()->bind(abstract: MarkPrivatesMessagesAsRead::class, concrete: $class);
    }

    /**
     * @param class-string<SendPrivateMessage> $class
     */
    public static function sendPrivateMessagesUsing(string $class): void
    {
        app()->bind(abstract: SendPrivateMessage::class, concrete: $class);
    }

    public static function getAvatarStyle(): AvatarStyle
    {
        $raw = config('basement.avatar.style');
        $style = is_string($raw) ? AvatarStyle::tryFrom($raw) : null;

        if ($style === null) {
            throw new \TypeError(
                'The given configuration basement.avatar.style should be a valid value of '
                . AvatarStyle::class . ' enum.',
            );
        }

        return $style;
    }

    /**
     * @return array<string,int|bool|string|null>
     */
    public static function getAvatarOptions(): array
    {
        $options = config('basement.avatar.options');

        if (is_array($options) === false) {
            throw new \TypeError(
                'The given configuration avatar.options inside config/basement.php should be of type array',
            );
        }

        /** @var array<string,int|bool|string|null> $options */

        return $options;
    }

    public static function getChatBoxWidgetPosition(): ChatBoxPosition
    {
        $raw = config('basement.chat_box_widget_position');
        $position = is_string($raw) ? ChatBoxPosition::tryFrom($raw) : null;

        if ($position === null) {
            throw new \TypeError(
                'The given configuration chat_box_widget_position inside config/basement.php should be a valid value of '
                . ChatBoxPosition::class . ' enum.',
            );
        }

        return $position;
    }

    /**
     * @return array<string,string|int|bool|list<string>|null>
     */
    public static function getBroadcastOptions(): array
    {
        $connections = config('basement.broadcaster.connections');
        $driver = config('basement.broadcaster.default');

        if (
            is_array($connections) === false
            || is_string($driver) === false
            || array_key_exists($driver, $connections) === false
        ) {
            throw new \TypeError(
                'The given configuration broadcaster.default inside config/basement.php should be available as an array key inside basement.broadcaster.connections.',
            );
        }

        /** @var array<string,string|int|bool|list<string>|null> $options */
        $options = $connections[$driver];

        return $options;
    }
}
