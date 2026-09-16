<?php

declare(strict_types=1);

namespace BasementChat\Basement\Enums;

enum MessageType: string
{
    case Document = 'DOCUMENT';
    case Text = 'TEXT';
}
