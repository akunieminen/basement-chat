<?php

declare(strict_types=1);

namespace BasementChat\Basement\Data;

use BasementChat\Basement\Enums\MessageType;
use BasementChat\Basement\Facades\Basement;
use BasementChat\Basement\Models\PrivateMessage;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * @property Authenticatable&\BasementChat\Basement\Contracts\User $receiver
 * @property Authenticatable&\BasementChat\Basement\Contracts\User $sender
 *
 * @implements Arrayable<string,mixed>
 */
class PrivateMessageData implements Arrayable
{
    protected \Closure $receiverResolver;

    protected \Closure $senderResolver;

    /**
     * @param (Authenticatable&\BasementChat\Basement\Contracts\User)|null $receiver
     * @param (Authenticatable&\BasementChat\Basement\Contracts\User)|null $sender
     */
    public function __construct(
        public readonly int $receiver_id,
        public readonly int $sender_id,
        public readonly MessageType $type,
        public readonly string $value,
        public ?int $id = null,
        public ?Carbon $created_at = null,
        public ?Carbon $read_at = null,
        Authenticatable|null $receiver = null,
        Authenticatable|null $sender = null,
    ) {
        $this->receiverResolver = function () use (&$receiver) {
            if ($receiver !== null) {
                return $receiver;
            }

            $receiver = Basement::newUserModel()->findOrFail($this->receiver_id);

            return $receiver;
        };

        $this->senderResolver = function () use (&$sender) {
            if ($sender !== null) {
                return $sender;
            }

            $sender = Basement::newUserModel()->findOrFail($this->sender_id);

            return $sender;
        };
    }

    public function __get(string $name): mixed
    {
        if ($name === 'receiver') {
            return ($this->receiverResolver)();
        }

        if ($name === 'sender') {
            return ($this->senderResolver)();
        }

        return null;
    }

    /**
     * @param array<int> $messagesId
     * @param array<string> $with
     * @return Collection<int,self>
     */
    public static function collectionFromId(array $messagesId, array $with = []): Collection
    {
        $messages = Basement::newPrivateMessageModel()
            ->with($with)
            ->whereIn('id', $messagesId)
            ->get();

        return $messages->map(static fn (PrivateMessage $message): self => new self(
            receiver_id: (int) $message->receiver_id,
            sender_id: (int) $message->sender_id,
            type: $message->type,
            value: $message->value,
            id: (int) $message->id,
            created_at: $message->created_at,
            read_at: $message->read_at,
        ));
    }

    /**
     * @return array<string,mixed>
     */
    public function toArray(): array
    {
        return [
            'receiver_id' => $this->receiver_id,
            'sender_id' => $this->sender_id,
            'type' => $this->type->value,
            'value' => $this->value,
            'id' => $this->id,
            'created_at' => $this->created_at?->toISOString(),
            'read_at' => $this->read_at?->toISOString(),
        ];
    }
}
