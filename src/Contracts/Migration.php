<?php

declare(strict_types=1);

namespace BasementChat\Basement\Contracts;

interface Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void;

    /**
     * Reverse the migrations.
     */
    public function down(): void;
}
