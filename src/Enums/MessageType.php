<?php

declare(strict_types=1);

namespace BasementChat\Basement\Enums;

use Illuminate\Support\Str;
use Spatie\Enum\Enum;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

/**
 * @method static self document()
 * @method static self text()
 */
class MessageType extends Enum
{
    /**
     * Change enum value when accessed.
     */
    protected static function values(): \Closure
    {
        return static fn (string $type): string => Str::upper($type);
    }
}
