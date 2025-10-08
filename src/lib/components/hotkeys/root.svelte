<script lang="ts">
	import type { Snippet } from 'svelte';

	const props: {
		children: Snippet;
	} = $props();
</script>

<div class="grid grid-cols-9 gap-6 rounded-4xl bg-white/20 p-6 drop-shadow-xl backdrop-blur-sm">
	{@render props.children?.()}
</div>
