<script lang="ts">
	export let title:string|null = null
	export let showModal:boolean
	export let color:string|null = null
	export let x:number|null = null
	export let y:number|null = null
	export let absolute:boolean = false

	let dialog:HTMLDialogElement

	
	$: if (dialog && showModal) {
		if (x) dialog.style.marginLeft = x + 'vw'
		if (y) dialog.style.marginTop = y + 'vh'
		if (color) dialog.style.backgroundColor = color
		if (absolute) dialog.style.position = 'absolute'

		dialog.showModal();
	}
</script>

<dialog bind:this={dialog} on:close={() => (showModal = false)}>
	<div class="header">
		<h1 class="title">{title}</h1>
		
		<button class="close" on:click={() => dialog.close()}>
			<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
				<line x1="1" y1="18" x2="18" y2="1" stroke-width="2"/>
				<line x1="1" y1="1" x2="18" y2="18" stroke-width="2"/>
			</svg>
		</button>
	</div>

	<div class="content">
		<slot />
	</div>
</dialog>

<style lang="scss">
	dialog {
		font-size: 1rem;
		max-width: 40em;
		border-radius: 0.3em;
		border: none;
		
		min-height: 6em;
		min-width: 20em;
		box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.3);

		&::backdrop { background: rgba(0, 0, 0, 0.3); }
		&[open]::backdrop { animation: fade 0.2s ease-out; }
		&[open] { animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
		
		.header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: 5px;
			width: 100%;
			height: 2.5em;
			background-color: rgba(0, 0, 0, 0.1);
			padding: 0 .8em;

			.title {
				font-size: 1.1em;
			}

			.close { 
				display: block;
				transform-origin: center;


				&:hover { transform: scale(1.2); }
			}
		}

		.content {
			margin-top: 1em;
			padding: 0 2em 1em;
		}

		
	}
	
	@keyframes zoom {
		from 	{ transform: scale(0.95); }
		to 		{ transform: scale(1); }
	}

	@keyframes fade {
		from 	{ opacity: 0; }
		to 		{ opacity: 1; }
	}
</style>