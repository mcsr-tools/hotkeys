<script lang="ts">
	import { getHotkeysContext } from '$lib/context.svelte';
	import Bind from '$lib/components/hotkeys/bind.svelte';

	const ctxHotkeys = getHotkeysContext();
</script>

<Bind option="Wide macro" bind:key={ctxHotkeys.state.macro.wide} />
