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
	{@render children?.()}
</main>
