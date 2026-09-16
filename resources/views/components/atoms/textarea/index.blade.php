<textarea
    {{ $attributes->merge([
        'type' => 'text',
        'class' =>
            'bm:form-textarea bm:w-full bm:resize-y bm:bg-white bm:border bm:border-gray-300 bm:rounded-md bm:text-sm bm:focus:outline-none bm:focus:ring-1 bm:focus:border-sky-300 bm:focus:ring-sky-300',
    ]) }}
>
    {{ $slot }}
</textarea>
