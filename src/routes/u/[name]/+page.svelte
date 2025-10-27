<script lang="ts">
	import { authClient } from '$lib/auth/client';
	import { hotkeysState, uiState } from '$lib/state.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { setHotkeysContext } from '$lib/hotkeys.context';
	import { addHotkeys } from './hotkeys.remote';

	const session = authClient.useSession();
	let { params, data } = $props();

	setHotkeysContext({
		isEditable: () => false,
	});

	Object.assign(hotkeysState, data.hotkeys.json_data);
</script>

<Visualizer />
