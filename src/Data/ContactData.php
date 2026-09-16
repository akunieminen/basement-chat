<?php

declare(strict_types=1);

namespace BasementChat\Basement\Data;

use Illuminate\Contracts\Support\Arrayable;

/**
 * @implements Arrayable<string,mixed>
 */
class ContactData implements Arrayable
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly string $avatar,
        public readonly ?PrivateMessageData $last_private_message = null,
        public readonly int $unread_messages = 0,
    ) {
    }

    /**
     * @return array<string,mixed>
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'avatar' => $this->avatar,
            'last_private_message' => $this->last_private_message?->toArray(),
            'unread_messages' => $this->unread_messages,
        ];
    }
}
