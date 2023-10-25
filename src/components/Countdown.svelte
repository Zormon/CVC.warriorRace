<script lang="ts">
    type Countdown = {
        days: number
        hours: number
        minutes: number
        seconds: number
    }

    export let endDate:Date
    export let showText:boolean = true
    export let small:boolean = false

    let timeLeft:number = endDate.getTime() - Date.now()


    let sizeClass = small? 'short' : 'full'
    
    let countParts:Countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    function stepCountdown() {
        timeLeft -= 1000
        countParts = {
            days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((timeLeft % (1000 * 60)) / 1000)
        }
    }

    stepCountdown()
    setInterval(stepCountdown, 1000)
</script>


{#if timeLeft > 0}
<div class={sizeClass}>
    <div class="part">
        <span class="num">{countParts.days.toString().padStart(2,'0')}</span>
        {#if showText}<span class="text">Días</span>{/if}
    </div>
    <div class="part">
        <span class="num">{countParts.hours.toString().padStart(2,'0')}</span>
        {#if showText}<span class="text">Horas</span>{/if}
    </div>
    <div class="part">
        <span class="num">{countParts.minutes.toString().padStart(2,'0')}</span>
        {#if showText}<span class="text">Minutos</span>{/if}
    </div>
    <div class="part">
        <span class="num">{countParts.seconds.toString().padStart(2,'0')}</span>
        {#if showText}<span class="text">Segundos</span>{/if}
    </div>
</div>
{/if}


<style lang="scss">
    .full > .part { 
        width: 5rem;
        height: 5rem;
    }
    .short > .part { 
        width: 4rem;
        height: 4rem;
    }

    .part { 
        display: inline-flex;
        flex-direction: column;
        place-items: center;
        justify-content: center;
        background-color: #ffffff55;
        border: 2px solid white;
        border-radius: 0.375rem;

        .num { 
            font-weight: bold;
            font-size: 1.4em; 
        }

        .text {
            font-size: .7em;
        }
    }
</style>