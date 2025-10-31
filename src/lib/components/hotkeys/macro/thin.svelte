<script lang="ts">
	import { getHotkeysContext } from '$lib/context.svelte';
	import Bind from '$lib/components/hotkeys/bind.svelte';

	const ctxHotkeys = getHotkeysContext();
</script>

<Bind option="Thin macro" bind:key={ctxHotkeys.state.macro.thin} />
