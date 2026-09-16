<?php

declare(strict_types=1);

namespace BasementChat\Basement\Contracts;

use BasementChat\Basement\Enums\AvatarStyle;
use BasementChat\Basement\Enums\ChatBoxPosition;
use BasementChat\Basement\Models\PrivateMessage;
use Illuminate\Foundation\Auth\User as Authenticatable;

interface Basement
{
    /**
     * Specify the user model used by the application.
     */
    public static function useUserModel(mixed $class): void;

    /**
     * Get the name of the user model used by the application.
     *
     * @return class-string<\Illuminate\Foundation\Auth\User>&class-string<\BasementChat\Basement\Contracts\User>
     *
     * @throws \TypeError if the given user model is not a subclass of \Illuminate\Foundation\Auth\User
     *                    or does not implement the \BasementChat\Basement\Contracts\User.
     */
    public static function userModel(): string;

    /**
     * Get a new instance of the user model.
     *
     * @return \Illuminate\Foundation\Auth\User&\BasementChat\Basement\Contracts\User
     */
    public static function newUserModel(): Authenticatable;

    /**
     * Specify the private message model used by the application.
     */
    public static function usePrivateMessageModel(mixed $class): void;

    /**
     * Get the name of the private message model used by the application.
     *
     * @return class-string<\BasementChat\Basement\Models\PrivateMessage>
     *
     * @throws \TypeError if the given user model is not a subclass of \BasementChat\Basement\Models\PrivateMessage.
     */
    public static function privateMessageModel(): string;

    /**
     * Get a new instance of the private message model.
     */
    public static function newPrivateMessageModel(): PrivateMessage;

    /**
     * @param class-string<\BasementChat\Basement\Contracts\AllContacts> $class
     */
    public static function allContactsUsing(string $class): void;

    /**
     * @param class-string<\BasementChat\Basement\Contracts\AllPrivateMessages> $class
     */
    public static function allPrivateMessagesUsing(string $class): void;

    /**
     * @param class-string<\BasementChat\Basement\Contracts\MarkPrivatesMessagesAsRead> $class
     */
    public static function markPrivateMessagesAsReadUsing(string $class): void;

    /**
     * @param class-string<\BasementChat\Basement\Contracts\SendPrivateMessage> $class
     */
    public static function sendPrivateMessagesUsing(string $class): void;

    /**
     * Get the avatar style from the basement configuration file.
     */
    public static function getAvatarStyle(): AvatarStyle;

    /**
     * Get the avatar options from the basement configuration file.
     *
     * @return array<string,int|bool|string|null>
     */
    public static function getAvatarOptions(): array;

    /**
     * Get the chat box widget position from the basement configuration file.
     */
    public static function getChatBoxWidgetPosition(): ChatBoxPosition;

    /**
     * Get the Laravel Echo client-side broadcast options from the basement configuration file.
     *
     * @return array<string,string|int|bool|list<string>|null>
     */
    public static function getBroadcastOptions(): array;
}
