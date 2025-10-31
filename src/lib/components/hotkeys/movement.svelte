<script lang="ts">
	import { getHotkeysContext } from '$lib/context.svelte';
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';

	const ctxHotkeys = getHotkeysContext();
</script>

<div class="flex h-full flex-col items-center justify-center">
	<Option>Movement</Option>
	<div class="flex gap-1 p-2">
		<Key class="min-w-12 rounded-2xl xl:min-w-20" bind:value={ctxHotkeys.state.movement.left} />
		<div class="flex w-15 flex-col gap-1">
			<Key bind:value={ctxHotkeys.state.movement.forward} />
			<Key bind:value={ctxHotkeys.state.movement.backward} />
		</div>
		<Key class="min-w-12 rounded-2xl xl:min-w-20" bind:value={ctxHotkeys.state.movement.right} />
	</div>
</div>
