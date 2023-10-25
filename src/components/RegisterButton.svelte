<script lang="ts">
    import Modal from './Modal.svelte';

    export let text: string;

    let showModal = false;
</script>


<button class="bg-red-800 text-white px-8 py-2 rounded-md uppercase" on:click={() => (showModal = true)}>{text}</button>

<Modal title="Elige tu modalidad" bind:showModal>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 m-4 text-lg">
        <a class="text-center bg-green-300 py-4 px-7 rounded-md hover:scale-110" href="https://venta.entradascanarias.com/entradascanarias/es_ES/entradas/evento/32974">Playland Warrior Race 1,5k</a>
        <a class="text-center bg-orange-300 py-4 px-7 rounded-md hover:scale-110" href="https://venta.entradascanarias.com/entradascanarias/es_ES/entradas/evento/32997">Warrior Race 3k</a>
        <a class="text-center bg-red-300 py-4 px-7 rounded-md hover:scale-110" href="https://venta.entradascanarias.com/entradascanarias/es_ES/entradas/evento/32998">Warrior Race 5k</a>
        <a class="text-center bg-black py-4 px-7 text-white rounded-md hover:scale-110" href="https://venta.entradascanarias.com/entradascanarias/es_ES/entradas/evento/33004/session/1908271/select">Warrior Race 5k Adults</a>
    </div>
</Modal>