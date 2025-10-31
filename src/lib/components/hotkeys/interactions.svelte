<script lang="ts">
	import { getHotkeysContext } from '$lib/context.svelte';
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';

	const ctxHotkeys = getHotkeysContext();
</script>

<div class="grid h-full grid-rows-3 gap-1 p-3">
	<div class="flex items-center gap-1.5">
		<Key class="min-h-0" bind:value={ctxHotkeys.state.interactions.use} />
		<Option class="shrink-0 text-xs xl:text-sm">Use item/Place block</Option>
	</div>
	<div class="flex items-center gap-1.5">
		<Key class="min-h-0" bind:value={ctxHotkeys.state.interactions.pick} />
		<Option class="shrink-0 text-xs xl:text-sm">Pick block</Option>
	</div>
	<div class="flex items-center gap-1.5">
		<Key class="min-h-0" bind:value={ctxHotkeys.state.interactions.attack} />
		<Option class="shrink-0 text-xs xl:text-sm">Attack/Destory</Option>
	</div>
</div>
