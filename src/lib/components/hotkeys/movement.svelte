<script lang="ts">
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';
	import { hotkeysState } from '$lib/state.svelte';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<Option>Movement</Option>
	<div class="flex gap-1 p-2">
		<Key class="min-w-12 rounded-2xl xl:min-w-20" bind:value={hotkeysState.movement.left}></Key>
		<div class="flex w-15 flex-col gap-1">
			<Key bind:value={hotkeysState.movement.forward} />
			<Key bind:value={hotkeysState.movement.backward} />
		</div>
		<Key class="min-w-12 rounded-2xl xl:min-w-20" bind:value={hotkeysState.movement.right}></Key>
	</div>
</div>
