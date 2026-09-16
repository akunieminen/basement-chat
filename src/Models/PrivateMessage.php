<?php

declare(strict_types=1);

namespace BasementChat\Basement\Models;

use BasementChat\Basement\Contracts\User as UserContract;
use BasementChat\Basement\Database\Factories\PrivateMessageFactory;
use BasementChat\Basement\Enums\MessageType;
use BasementChat\Basement\Facades\Basement;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * @property int $id
 * @property int $receiver_id
 * @property int $sender_id
 * @property MessageType $type
 * @property string $value
 * @property \Illuminate\Support\Carbon $created_at
 * @property \Illuminate\Support\Carbon|null $read_at
 *
 * @method static \BasementChat\Basement\Database\Factories\PrivateMessageFactory factory(...$parameters)
 * @method static PrivateMessage orderByDescId()
 * @method static PrivateMessage whereBetweenTwoUsers(Authenticatable $a, Authenticatable $b)
 * @method static PrivateMessage whereValueLike(string $keyword)
 */
class PrivateMessage extends Model
{
    /** @use HasFactory<PrivateMessageFactory> */
    use HasFactory;
    use SoftDeletes;

    /**
     * @var list<string>
     */
    protected $fillable = [
        'receiver_id',
        'sender_id',
        'type',
        'value',
        'read_at',
    ];

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'type' => MessageType::class,
            'read_at' => 'datetime',
        ];
    }

    /**
     * @return BelongsTo<Authenticatable&UserContract, $this>
     */
    public function receiver(): BelongsTo
    {
        return $this->belongsTo(related: Basement::userModel());
    }

    /**
     * @return BelongsTo<Authenticatable&UserContract, $this>
     */
    public function sender(): BelongsTo
    {
        return $this->belongsTo(related: Basement::userModel());
    }

    protected static function newFactory(): PrivateMessageFactory
    {
        return PrivateMessageFactory::new();
    }

    /**
     * @param Builder<self> $query
     */
    public function scopeOrderByDescId(Builder $query): void
    {
        $query->orderByDesc($this->primaryKey);
    }

    /**
     * @param Builder<self> $query
     */
    public function scopeWhereBetweenTwoUsers(Builder $query, Authenticatable $a, Authenticatable $b): void
    {
        $query->where(static fn (Builder $clause): Builder => $clause
            ->where(static fn (Builder $subclause): Builder => $subclause
                ->whereBelongsTo($a, 'receiver')
                ->whereBelongsTo($b, 'sender'))
            ->orWhere(static fn (Builder $subclause): Builder => $subclause
                ->whereBelongsTo($b, 'receiver')
                ->whereBelongsTo($a, 'sender')));
    }

    /**
     * @param Builder<self> $query
     */
    public function scopeWhereValueLike(Builder $query, string $keyword): void
    {
        if ($keyword !== '') {
            $query->where('value', 'like', "%{$keyword}%");
        }
    }
}
