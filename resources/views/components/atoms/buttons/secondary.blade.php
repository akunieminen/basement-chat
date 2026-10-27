<button
    {{ $attributes->merge([
        'type' => 'button',
        'class' => 'bm:hover:bg-gray-100 bm:transition bm:rounded-lg',
    ]) }}
>
    {{ $slot }}
</button>
