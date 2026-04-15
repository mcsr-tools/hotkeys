<script lang="ts">
	import { getHotkeysContext } from '$lib/context.svelte';
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';

	const ctxHotkeys = getHotkeysContext();
</script>

<div class="flex h-full items-center justify-around">
	<div class="flex flex-col items-center">
		<Option>Off-hand</Option>
		<Key
			class="aspect-square h-11 rounded-xl p-0 text-xs xl:h-14 xl:text-base"
			bind:value={ctxHotkeys.state.offHand}
		/>
	</div>
	<div class="flex gap-1">
		{#each { length: 9 }, n}
			<div class="flex flex-col items-center">
				<Option>{n + 1}</Option>
				<Key
					class="aspect-square h-11 rounded-xl p-0 px-0 text-sm xl:h-14 xl:px-0 xl:text-base"
					bind:value={ctxHotkeys.state.hotbar[n]}
				/>
			</div>
		{/each}
	</div>
</div>
