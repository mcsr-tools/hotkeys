<script lang="ts">
	import { resolve } from '$app/paths';
	import { getHotkeysContext, getUiContext } from '$lib/context.svelte';
	import * as H from '$lib/components/hotkeys';
	import * as M from '$lib/components/hotkeys/macro';

	const ctxUi = getUiContext();
	const ctxHotkeys = getHotkeysContext();

	$effect(() => {
		document.body.style.setProperty('--background', ctxUi.state.background);
	});
</script>

<H.Root>
	<H.Cell size={2} class="bg-black/80">
		<H.Profile />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Drop item" bind:key={ctxHotkeys.state.dropItem} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Inventory" bind:key={ctxHotkeys.state.inventory} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Perspective" bind:key={ctxHotkeys.state.perspective} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Sneak" bind:key={ctxHotkeys.state.sneak} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Sprint" bind:key={ctxHotkeys.state.sprint} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="F3" bind:key={ctxHotkeys.state.f3} />
	</H.Cell>
	<H.Cell size={1}>
		<H.Bind option="Chat" bind:key={ctxHotkeys.state.chat} />
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
			<a href={resolve('/')}>mcsr.tools/hotkeys</a>
		</p>
	</H.Cell>
</H.Root>
