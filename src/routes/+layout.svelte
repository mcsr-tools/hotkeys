<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { uiState } from '$lib/state.svelte';

	let { children } = $props();

	$effect(() => {
		document.body.style.setProperty('--background', uiState.background);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container mx-auto px-2 pt-6">
	<div class="rounded-2xl bg-white/30 p-4 text-black drop-shadow-xl backdrop-blur-sm lg:hidden">
		Your current resolution is not supported. Please view this page in desktop mode.
	</div>
	<div class="hidden lg:block">
		{@render children?.()}
	</div>
</main>
