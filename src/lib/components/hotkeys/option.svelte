<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const props: {
		class?: string;
		children?: Snippet;
	} = $props();
</script>

<span class={twMerge('text-sm text-black xl:text-xl 2xl:text-xl', props.class)}>
	{@render props.children?.()}
</span>
