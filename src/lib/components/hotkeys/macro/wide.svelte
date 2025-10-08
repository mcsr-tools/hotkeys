<script lang="ts">
	import Bind from '$lib/components/hotkeys/bind.svelte';
	import { hotkeysState } from '$lib/state.svelte';
</script>

<Bind option="Wide macro" bind:key={hotkeysState.macro.wide} />
