<script lang="ts">
	import { resolve } from '$app/paths';

	import Visualizer from '$lib/components/visualizer.svelte';
	import { hotkeysState, profileState } from '$lib/state.svelte';
</script>

<Visualizer />

<div class="mt-10 hidden lg:block">
	<a
		class="rounded-2xl bg-linear-to-r from-emerald-200 to-emerald-50 px-3 py-1 font-light text-neutral-800 drop-shadow-lg transition-all hover:from-emerald-300 hover:to-emerald-100 hover:drop-shadow-xl"
		href={resolve(
			`/v1/${btoa(
				JSON.stringify({
					hotkeys: hotkeysState,
					profile: profileState
				})
			)}`
		)}>View your hotkeys page</a
	>
</div>
