<script lang="ts">
	import Bind from '$lib/components/hotkeys/bind.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';
	import { hotkeysState } from '$lib/state.svelte';
</script>

<div class="flex h-full items-center justify-around gap-1">
	<Bind option="Eye macro" bind:key={hotkeysState.macro.eye.key} />
	<Bind option="Reset" bind:key={hotkeysState.macro.eye.reset} />
	<div class="flex flex-col items-center gap-1">
		<Option>Adjustment</Option>
		<div class="flex gap-1">
			<Bind option="-" bind:key={hotkeysState.macro.eye.dec} inline />
			<Bind option="+" bind:key={hotkeysState.macro.eye.inc} inline reverse />
		</div>
	</div>
</div>
