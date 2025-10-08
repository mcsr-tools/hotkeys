<script lang="ts">
	import { page } from '$app/state';
	import { hotkeysState, profileState } from '$lib/state.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';

	$effect.pre(() => {
		const { profile, hotkeys } = JSON.parse(atob(page.params.slug!));
		Object.assign(hotkeysState, hotkeys);
		Object.assign(profileState, profile);
	});

	const newSlug = $derived(
		btoa(
			JSON.stringify({
				profile: profileState,
				hotkeys: hotkeysState
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
