<script lang="ts">
	import { resolve } from '$app/paths';
	import * as H from '$lib/components/hotkeys';
	import * as M from '$lib/components/hotkeys/macro';
	import { hotkeysState } from '$lib/state.svelte';
</script>

<H.Root>
	<H.Cell size={2} class="bg-black/80">
		<H.Profile />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Drop item" bind:key={hotkeysState.dropItem} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Inventory" bind:key={hotkeysState.inventory} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Perspective" bind:key={hotkeysState.perspective} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Sneak" bind:key={hotkeysState.sneak} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Sprint" bind:key={hotkeysState.sprint} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="F3" bind:key={hotkeysState.f3} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Chat" bind:key={hotkeysState.chat} />
	</H.Cell>

	<H.Cell size={2}>
		<H.Movement />
	</H.Cell>
	<H.Cell size={5}>
		<H.Hotbar />
	</H.Cell>
	<H.Cell size={2}>
		<H.Interactions />
	</H.Cell>
	<H.Cell size={2}>
		<M.Wide />
	</H.Cell>
	<H.Cell size={1}>
		<M.Thin />
	</H.Cell>
	<H.Cell size={4}>
		<M.Eye />
	</H.Cell>
	<H.Cell
		size={2}
		class="flex items-end justify-end overflow-visible bg-transparent backdrop-blur-none"
	>
		<p class="col-span-full text-sm font-extralight text-amber-950 xl:text-xl">
			<a class="underline" href={resolve('/')}>mcsr.tools/hotkeys</a> •
			<a class="underline" href="https://github.com/mcsr-tools/hotkeys" target="_blank"> source </a>
		</p>
	</H.Cell>
</H.Root>
