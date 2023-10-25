<script lang="ts">
    let fullName = ''
    let dni = ''
    let email = ''
    let tel = ''
    let age = ''
    let kids = [{ name: '', age: '' }]

    export let maxKids:number
    export let endpoint:string

    let maxReached = false

    function addKid() {
        if (kids.length < maxKids) {
            maxReached = false
            kids = [...kids, { name: '', age: '' }]
        } else {
            maxReached = true
            return
        }
    }

    function send() {
        const data = { fullName, dni, email, tel, age, kids }

        console.log(JSON.stringify(data))
        console.log(endpoint)
        
        /*
        fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })*/
    }
</script>

<form on:submit|preventDefault={send} class="flex flex-col gap-4 w-80 bg-slate-100 m-auto my-10 p-4">
    <label>
        Nombre y apellidos:
        <input type="text" bind:value={fullName} required pattern={ '[A-Za-z]{2,}( [A-Za-z]{2,}){1,}' } />
    </label>
    <label>
        DNI:
        <input type="text" bind:value={dni} required minlength="3" />
    </label>
    <label>
        Email:
        <input type="email" bind:value={email} />
    </label>
    <label>
        Teléfono:
        <input type="tel" bind:value={tel} />
    </label>
    <label>
        Edad:
        <input type="number" min="18" max="99" bind:value={age} />
    </label>

    <fieldset class="bg-slate-200">
        <legend>Acompañantes</legend>
        {#each kids as kid, i}
            <div class="flex flex-col gap-2 p-2">
                <h3>Niño {i + 1}</h3>
                <label>
                    Name:
                    <input type="text" bind:value={kid.name} />
                </label>
                <label>
                    Age:
                    <input type="number" min="3" max="18" bind:value={kid.age} />
                </label>
            </div>
        {/each}
    </fieldset>

    <button type="button" on:click={addKid} disabled={maxReached}>Añadir niño</button>
    <button class="" type="submit">Enviar</button>
</form>
