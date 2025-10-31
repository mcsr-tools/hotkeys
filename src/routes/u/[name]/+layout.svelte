<script lang="ts">
	import { authClient } from '$lib/auth/client';
	import {
		setHotkeysContext,
		setProfileContext,
		setUiContext,
		setVisualizerContext
	} from '$lib/context.svelte';

	const session = authClient.useSession();

	let { children, data, params } = $props();

	setProfileContext({
		name: params.name
	});

	setVisualizerContext({
		isEditable: (name) => !!$session.data?.user && name !== 'profile'
	});

	if (data.hotkeys) {
		setHotkeysContext(data.hotkeys.jsonData);
		setUiContext({
			background: data.hotkeys?.jsonMeta.bgColor
		});
	}
</script>

{@render children?.()}
