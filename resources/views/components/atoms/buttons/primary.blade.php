<button
    {{ $attributes->merge([
        'type' => 'button',
        'class' => 'bm:hover:bg-gray-100 bm:transition bm:text-blue-500 bm:font-bold bm:rounded-lg',
    ]) }}
>
    {{ $slot }}
</button>
