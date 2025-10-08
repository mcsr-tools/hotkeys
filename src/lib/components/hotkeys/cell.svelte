<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const props: {
		children?: Snippet;
		size: number;
		class?: string;
	} = $props();
</script>

<div
	class={twMerge(
		'h-full max-w-full overflow-scroll rounded-2xl bg-white/30 backdrop-blur-sm',
		props.class
	)}
	style={`--size: ${props.size}`}
>
	{@render props.children?.()}
</div>

<style>
	div {
		aspect-ratio: var(--size) / 1;
		grid-column: span var(--size) / span var(--size);
	}
</style>
