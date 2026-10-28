<div class="basement">
    <div
        data-echo-options="{{ json_encode($echoOptions) }}"
        x-ref="basementChatBox"
        x-data="basementChatBox"
        x-bind:class="isExpanded ? 'bm:w-[22rem]! bm:max-w-[90vw] bm:h-[32rem]! bm:max-h-full bm:pt-6' : ''"
        @class([
            'basement-chat-box bm:h-14 bm:w-14 bm:fixed bm:z-10',
            'bm:bottom-3 bm:left-3' =>
                $position === \BasementChat\Basement\Enums\ChatBoxPosition::BottomLeft,
            'bm:bottom-3 bm:right-3' =>
                $position === \BasementChat\Basement\Enums\ChatBoxPosition::BottomRight,
        ])
    >

        {{-- Unread: the launcher turns red with the count in white. On load with unread messages and on every new one, a soft
             ring leaves it four times (the owner wanted it noticeable); then the red holds the state. (No pop of the launcher itself: scaling it
             while its colour changed drew tile seams across it in Firefox.) --}}
        <span
            class="bm:pointer-events-none bm:absolute bm:inset-0 bm:rounded-full bm:bg-red-500 bm:opacity-0"
            x-ref="unreadRing"
            x-show="isMinimized === true && !isExpanded"
        ></span>
        <button
            class="basement-chat-box__open-button bm:relative bm:h-full bm:w-full bm:rounded-full bm:border bm:shadow-lg bm:transition bm:starting:opacity-0 bm:motion-safe:starting:scale-75"
            x-on:click="isMinimized = false"
            x-bind:class="[
                isMinimized === true && !isExpanded ? '' : 'bm:hidden',
                totalUnreadMessages > 0
                    ? 'bm:border-red-500 bm:bg-red-500 bm:text-white bm:hover:bg-red-600'
                    : 'bm:bg-white bm:text-blue-500 bm:hover:bg-blue-500 bm:hover:text-white'
            ]"
            x-bind:data-title="totalUnreadMessages === 0 ? 'Katso viestit' : `Sinulla on ${totalUnreadMessages} uutta viestiä`"
            x-init="$watch('totalUnreadMessages', (count, before) => {
                if (count <= before || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
                $refs.unreadRing.animate({ scale: [1, 2], opacity: [0.7, 0] }, { duration: 1000, easing: 'cubic-bezier(0, 0, 0.2, 1)', iterations: 4 });
            })"
        >
            <template x-if="totalUnreadMessages === 0">
                <x-basement::atoms.icons.far-comments class="bm:m-auto bm:h-auto bm:w-10" />
            </template>
            <template x-if="totalUnreadMessages > 0">
                <span
                    class="bm:text-xl bm:font-bold bm:tabular-nums"
                    x-text="totalUnreadMessages > 99 ? '99+' : totalUnreadMessages"
                ></span>
            </template>
        </button>

        {{-- The window grows out of the launcher's corner and shrinks back into it: scale runs longer than the fade on the way
             in, and on the way out the fade waits, so the shrinking window stays visible until it is launcher-sized. --}}
        <div
            @class([
                'bm:relative bm:h-full bm:w-full bm:overflow-hidden bm:shadow-lg',
                'bm:origin-bottom-left' =>
                    $position === \BasementChat\Basement\Enums\ChatBoxPosition::BottomLeft,
                'bm:origin-bottom-right' =>
                    $position === \BasementChat\Basement\Enums\ChatBoxPosition::BottomRight,
            ])
            style="display: none"
            x-show="isMinimized !== true"
            x-transition:enter="bm:[transition:opacity_150ms_var(--bm-ease-out),scale_250ms_var(--bm-ease-out)]"
            x-transition:enter-start="bm:opacity-0 bm:motion-safe:scale-[0.15]"
            x-transition:enter-end="bm:opacity-100 bm:scale-100"
            x-transition:leave="bm:[transition:opacity_120ms_var(--bm-ease-out)_80ms,scale_200ms_var(--bm-ease-out)]"
            x-transition:leave-start="bm:opacity-100 bm:scale-100"
            x-transition:leave-end="bm:opacity-0 bm:motion-safe:scale-[0.15]"
        >
            <x-basement::organisms.contacts />
            <x-basement::organisms.private-messages />
        </div>
    </div>
</div>
