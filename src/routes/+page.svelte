<script lang="ts">
	import { resolve } from '$app/paths';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { hotkeysState, profileState, uiState } from '$lib/state.svelte';
</script>

<Visualizer />

<div class="mt-10 hidden items-center gap-2 lg:flex">
	<input
		class="size-8 rounded-full border-2 border-black hover:cursor-pointer"
		type="color"
		bind:value={uiState.background}
	/>
	<a
		class="rounded-2xl bg-linear-to-r from-emerald-200 to-emerald-50 px-3 py-1 font-light text-neutral-800 drop-shadow-lg transition-all hover:from-emerald-300 hover:to-emerald-100 hover:drop-shadow-xl"
		href={resolve(
			`/v1/${btoa(
				JSON.stringify({
					hotkeys: hotkeysState,
					profile: profileState,
					ui: uiState
				})
			)}`
		)}>View your hotkeys page</a
	>
</div>
