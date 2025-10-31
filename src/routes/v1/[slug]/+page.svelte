<script lang="ts">
	import { resolve } from '$app/paths';
	import { replaceState } from '$app/navigation';
	import { getHotkeysContext, getProfileContext, getUiContext } from '$lib/context.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import ActionBar from './action-bar.svelte';

	const ctxProfile = getProfileContext();
	const ctxHotkeys = getHotkeysContext();
	const ctxUi = getUiContext();

	const newSlug = $derived(
		btoa(
			JSON.stringify({
				// backwards compatibility
				profile: {
					nickname: ctxProfile.state.name
				},
				hotkeys: ctxHotkeys.state,
				ui: ctxUi.state
			})
		)
	);

	$effect(() => {
		// tmp workaround for thrown error `Cannot call replaceState(...) before router is initialized`
		try {
			replaceState(resolve(`/v1/${newSlug}`), {});
		} catch {
			void 0; // noop
		}
	});
</script>

<Visualizer />

<ActionBar />
