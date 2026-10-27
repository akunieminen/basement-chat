<button
    {{ $attributes->merge([
        'class' => 'bm:hover:bg-gray-100 bm:hover:text-blue-500 bm:transition bm:rounded-lg bm:w-6',
    ]) }}
>
    {{ $slot }}
</button>
