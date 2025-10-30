<script lang="ts">
	import { page } from '$app/state';
	import { hotkeysState, profileState, uiState } from '$lib/state.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import toast from 'svelte-french-toast';

	const newSlug = $derived(
		btoa(
			JSON.stringify({
				profile: profileState,
				hotkeys: hotkeysState,
				ui: uiState
			})
		)
	);

	$effect.pre(() => {
		const { profile, hotkeys, ui } = JSON.parse(atob(page.params.slug!));
		Object.assign(hotkeysState, hotkeys);
		Object.assign(profileState, profile);

		// backwards compatibility
		if (ui) {
			Object.assign(uiState, ui);
		}
	});

	$effect(() => {
		// tmp workaround for thrown error `Cannot call replaceState(...) before router is initialized`
		try {
			replaceState(resolve(`/v1/${newSlug}`), {});
		} catch {
			void 0; // noop
		}
	});

	async function copyUrl() {
		toast.promise(
			globalThis.navigator.clipboard.writeText(globalThis.window.location.toString()),
			{
				loading: 'Copying...',
				success: 'URL copied to clipboard!',
				error: 'Failed to copy to clipboard :('
			},
			{
				position: 'top-center'
			}
		);
	}
</script>

<Visualizer />

<div class="action-bar">
	<input class="input-color" type="color" bind:value={uiState.background} />
	<button class="btn" type="button" onclick={copyUrl}>Copy your hotkeys page URL</button>
	<span>or share this page which is automatically updated</span>
</div>
