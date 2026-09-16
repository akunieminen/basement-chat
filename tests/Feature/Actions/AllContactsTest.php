<?php

declare(strict_types=1);

namespace BasementChat\Basement\Tests\Feature\Actions;

use BasementChat\Basement\Contracts\AllContacts;
use BasementChat\Basement\Data\ContactData;
use BasementChat\Basement\Data\PrivateMessageData;
use BasementChat\Basement\Enums\AvatarStyle;
use BasementChat\Basement\Tests\Fixtures\Models\User;
use BasementChat\Basement\Tests\TestCase;
use BasementChat\Basement\Tests\WithPrivateMessages;
use BasementChat\Basement\Tests\WithUsers;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Collection;
use PHPUnit\Framework\Attributes\Test;

class AllContactsTest extends TestCase
{
    use RefreshDatabase;
    use WithPrivateMessages;
    use WithUsers;

    protected User $receiver;

    protected User $sender1;

    protected User $sender2;

    /**
     * Setup the test environment.
     */
    public function setUp(): void
    {
        parent::setUp();

        $this->setUpUsers();
        $this->setUpPrivateMessages();
        $this->addUsers(3);

        $this->receiver = $this->users[0];
        $this->sender1 = $this->users[1];
        $this->sender2 = $this->users[2];
    }

    #[Test]
    public function itShouldBeAbleToGetAllContacts(): void
    {
        /** @var \BasementChat\Basement\Contracts\AllContacts $allContacts */
        $allContacts = app(AllContacts::class);

        $contacts = $allContacts->all($this->receiver);

        $this->assertInstanceOf(expected: Collection::class, actual: $contacts);
        $this->assertCount(expectedCount: 3, haystack: $contacts);

        $contact = $this->sameContact(id: $this->receiver->id, contacts: $contacts);

        $this->assertInstanceOf(expected: ContactData::class, actual: $contact);
        $this->assertSame(expected: $contact->id, actual: $this->receiver->id);
        $this->assertSame(expected: $contact->name, actual: $this->receiver->name);
        $this->assertSame(expected: $contact->avatar, actual: $this->receiver->avatar);
    }

    #[Test]
    public function itShouldHaveTheLastPrivateMessage(): void
    {
        $this->addPrivateMessages(receiver: $this->receiver, sender: $this->sender1, count: 10);

        /** @var \BasementChat\Basement\Models\PrivateMessage $lastMessage */
        $lastMessage = $this->privateMessages->last();

        /** @var \BasementChat\Basement\Contracts\AllContacts $allContacts */
        $allContacts = app(AllContacts::class);

        $contact = $this->sameContact(contacts: $allContacts->all($this->sender1), id: $this->receiver->id);

        $this->assertInstanceOf(expected: PrivateMessageData::class, actual: $contact->last_private_message);
        $this->assertSame(expected: $lastMessage->id, actual: $contact->last_private_message->id);
        $this->assertSame(expected: $lastMessage->receiver_id, actual: $contact->last_private_message->receiver_id);
        $this->assertSame(expected: $lastMessage->sender_id, actual: $contact->last_private_message->sender_id);
        $this->assertSame(expected: $lastMessage->type, actual: $contact->last_private_message->type);
        $this->assertSame(expected: $lastMessage->created_at->toString(), actual: $contact->last_private_message->created_at->toString());
        $this->assertSame(expected: $lastMessage->read_at, actual: $contact->last_private_message->read_at);
    }

    #[Test]
    public function itShouldHaveTheNumberOfUnreadMessages(): void
    {
        $this->addPrivateMessages(receiver: $this->receiver, sender: $this->sender1, count: 10);

        /** @var \BasementChat\Basement\Contracts\AllContacts $allContacts */
        $allContacts = app(AllContacts::class);

        $contact = $this->sameContact(id: $this->sender1->id, contacts: $allContacts->all($this->receiver));

        $this->assertSame(expected: $contact->unread_messages, actual: 10);
    }

    #[Test]
    public function itShouldBeSortedInDescOrderAtTheTimeTheLastMessageIsReceived(): void
    {
        $this->addPrivateMessages(receiver: $this->receiver, sender: $this->sender1, count: 10);
        $this->addPrivateMessages(receiver: $this->receiver, sender: $this->sender2, count: 10);

        /** @var \BasementChat\Basement\Contracts\AllContacts $allContacts */
        $allContacts = app(AllContacts::class);

        /** @var Collection & array<\BasementChat\Basement\Data\ContactData> $contacts */
        $contacts = $allContacts->all($this->receiver);

        $this->assertSame(expected: $this->sender2->id, actual: $contacts[0]->id);
        $this->assertSame(expected: $this->sender1->id, actual: $contacts[1]->id);
        $this->assertSame(expected: $this->receiver->id, actual: $contacts[2]->id);
    }

    #[Test]
    public function itAvatarPropertyShouldRepresentTheValueFromTheConfigFile(): void
    {
        config(['basement.avatar.style' => AvatarStyle::BigEars->value]);
        config(['basement.avatar.options' => ['size' => 32]]);

        /** @var \BasementChat\Basement\Contracts\AllContacts $allContacts */
        $allContacts = app(AllContacts::class);

        $contact = $this->sameContact(contacts: $allContacts->all($this->sender1), id: $this->receiver->id);

        $this->assertSame(
            expected: 'https://api.dicebear.com/9.x/big-ears/svg?seed=' . md5($contact->name) . '&size=32',
            actual: $contact->avatar,
        );
    }

    protected function sameContact(int $id, Collection $contacts): ContactData
    {
        /** @var \BasementChat\Basement\Data\ContactData $contact */
        $contact = $contacts->first(static fn (ContactData $data): bool => $data->id === $id);

        return $contact;
    }
}
