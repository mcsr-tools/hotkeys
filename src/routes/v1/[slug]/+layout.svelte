<script lang="ts">
	import {
		setHotkeysContext,
		setProfileContext,
		setUiContext,
		setVisualizerContext
	} from '$lib/context.svelte';

	let { children, params } = $props();

	const { hotkeys, profile, ui } = JSON.parse(atob(params.slug));

	setVisualizerContext({
		isEditable: () => true
	});

	setProfileContext({
		name: profile.nickname as string
	});

	setHotkeysContext(hotkeys);

	if (ui) {
		setUiContext({
			background: ui.background
		});
	}
</script>

{@render children?.()}
