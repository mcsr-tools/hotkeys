<script lang="ts">
	import { page } from '$app/state';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { setHotkeysContext } from '$lib/hotkeys.context';
	import { profileState } from '$lib/state.svelte';

	if (page.params.name) {
		profileState.nickname = page.params.name;
	}

	setHotkeysContext({
		isEditable: (name) => name !== 'profile'
	});
</script>

<Visualizer />
