<?php

declare(strict_types=1);

namespace BasementChat\Basement\Tests\Feature\Api;

use BasementChat\Basement\Events\CurrentlyTyping;
use BasementChat\Basement\Tests\TestCase;
use BasementChat\Basement\Tests\WithUsers;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use PHPUnit\Framework\Attributes\Test;

class CurrentlyTypingTest extends TestCase
{
    use RefreshDatabase;
    use WithUsers;

    #[Test]
    public function itShouldBroadcastTypingSignalsOutsideTheSharedApiRateLimit(): void
    {
        Event::fake([CurrentlyTyping::class]);

        $this->setUpUsers();
        $this->addUsers(2);
        $this->actingAs($this->users[1]);

        $response = $this->get("/api/basement/contacts/{$this->users[0]->id}/currently-typing");

        $response->assertNoContent();
        // 30 is the dedicated typing bucket; 60 would mean "throttle:api" still applies.
        $response->assertHeader('X-RateLimit-Limit', '30');
        Event::assertDispatched(CurrentlyTyping::class);
    }
}
