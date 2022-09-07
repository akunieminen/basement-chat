<?php

declare(strict_types=1);

namespace BasementChat\Basement\Actions;

use BasementChat\Basement\Contracts\AllPrivateMessages as AllPrivateMessagesContract;
use BasementChat\Basement\Data\PrivateMessageData;
use BasementChat\Basement\Facades\Basement;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\LaravelData\DataCollection;

class AllPrivateMessages implements AllPrivateMessagesContract
{
    /**
     * The query string variable used to store the cursor.
     */
    protected const CURSOR_NAME = 'basement.page';

    /**
     * The total number of messages displayed per page.
     */
    protected const MESSAGES_PER_PAGE = 50;

    /**
     * Get all private messages between to a given user list.
     *
     * @param \Illuminate\Foundation\Auth\User&\BasementChat\Basement\Contracts\User $receiver
     * @param \Illuminate\Foundation\Auth\User&\BasementChat\Basement\Contracts\User $sender
     */
    public function allBetweenTwoUsers(
        Authenticatable $receiver,
        Authenticatable $sender,
        string $keyword = '',
    ): DataCollection {
        $messages = Basement::newPrivateMessageModel()
            ->whereBetweenTwoUsers($receiver, $sender)
            ->whereValueLike($keyword)
            ->orderByDescId()
            ->cursorPaginate(perPage: self::MESSAGES_PER_PAGE, cursorName: self::CURSOR_NAME);

        return PrivateMessageData::collection($messages);
    }
}
