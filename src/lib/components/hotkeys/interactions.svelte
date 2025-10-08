<script lang="ts">
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';
	import { hotkeysState } from '$lib/state.svelte';
</script>

<div class="grid h-full grid-rows-3 gap-1 p-3">
	<div class="flex items-center justify-end gap-1">
		<Option class="shrink-0 text-xs xl:text-sm">Use item/Place block</Option>
		<Key class="px-2" bind:value={hotkeysState.interactions.use} />
	</div>
	<div class="flex items-center justify-center gap-1">
		<Option class="shrink-0 text-xs xl:text-sm">Pick</Option>
		<Key class="px-2" bind:value={hotkeysState.interactions.pick} />
		<Option class="shrink-0 text-xs xl:text-sm">block</Option>
	</div>
	<div class="flex items-center justify-start gap-1">
		<Key class="px-2" bind:value={hotkeysState.interactions.attack} />
		<Option class="shrink-0 text-xs xl:text-sm">Attack/Destory</Option>
	</div>
</div>
