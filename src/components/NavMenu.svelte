<script>
    import { onMount } from 'svelte'

    export let items = [{ label: 'Home', link: '' }]
    export let current = ''

    const mobileClass = 'fixed top-0 right-0 w-full h-full z-10 flex flex-col gap-6 justify-center items-center bg-blue-900 text-2xl'
    const desktopClass = 'flex flex-row gap-4 bg-blue-900 text-lg'

    let isMobile = false
    let isOpen = false

    function toggleMenu () { isOpen = !isOpen }

    onMount(() => {
        isMobile = window.innerWidth < 768
        window.addEventListener('resize', () => { isMobile = window.innerWidth < 768 })
    })
</script>

<nav>
    {#if isMobile}
        <button class="text-white z-20 relative" on:click={toggleMenu}>
            {#if !isOpen}
            <svg viewPort="0 0 24 24" width="24" height="24" stroke="currentColor">
                <line x1="0" y1="4" x2="24" y2="4" stroke-width="3"/>
                <line x1="0" y1="12" x2="24" y2="12" stroke-width="3"/>
                <line x1="0" y1="20" x2="24" y2="20" stroke-width="3"/>
            </svg>
            {:else}
            <svg viewPort="0 0 24 24" width="24" height="24" stroke="currentColor">
                <line x1="1" y1="18" x2="18" y2="1" stroke-width="2"/>
                <line x1="1" y1="1" x2="18" y2="18" stroke-width="2"/>
            </svg>
            {/if}
        </button>
    {/if}

    <div class={(isMobile? mobileClass : desktopClass) + (!isOpen&&isMobile? ' hidden' : '')}>
        {#each items as item}
            {#if item.link != current}
                <a class="mx-2 text-black bg-white py-1 px-2 inline-block odd:skew-x-6 even:-skew-x-6 odd:skew-y-2 even:-skew-y-2 hover:scale-110" href={'/'+item.link}>{item.label}</a>
            {:else}
                <span class="text-white bg-black py-1 px-2 inline-block mx-2 odd:skew-x-6 even:-skew-x-6 odd:skew-y-2 even:-skew-y-2 scale-110">{item.label}</span>
            {/if}
        {/each}
    </div>
</nav>