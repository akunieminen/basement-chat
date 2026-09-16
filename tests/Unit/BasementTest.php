<?php

namespace BasementChat\Basement\Tests\Unit;

use BasementChat\Basement\Basement;
use BasementChat\Basement\Tests\TestCase;
use Illuminate\Support\Facades\Config;
use PHPUnit\Framework\Attributes\Test;

class BasementTest extends TestCase
{
    #[Test]
    public function itShouldThrowTypeErrorWhenUserModelIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Basement::useUserModel('Foo\\Bar');
        Basement::userModel();
    }

    #[Test]
    public function itShouldThrowTypeErrorWhenPrivateMessageModelIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Basement::usePrivateMessageModel('Foo\\Bar');
        Basement::privateMessageModel();
    }

    #[Test]
    public function itShouldThrowTypeErrorWhenAvatarStyleIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Config::set(key: 'basement.avatar.style', value: 'Foo\\Bar');

        Basement::getAvatarStyle();
    }

    #[Test]
    public function itShouldThrowTypeErrorWhenAvatarOptionsIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Config::set(key: 'basement.avatar.options', value: false);

        Basement::getAvatarOptions();
    }

    #[Test]
    public function itShouldThrowTypeErrorWhenChatBoxWidgetPositionIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Config::set(key: 'basement.chat_box_widget_position', value: 'Foo\\Bar');

        Basement::getChatBoxWidgetPosition();
    }

    #[Test]
    public function itShouldThrowTypeErrorWhenBroadcastOptionsIsInvalid(): void
    {
        $this->expectException(\TypeError::class);

        Config::set(key: 'basement.broadcaster.default', value: 'foo_bar');

        Basement::getBroadcastOptions();
    }
}
