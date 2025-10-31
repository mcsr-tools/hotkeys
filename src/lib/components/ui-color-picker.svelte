<script lang="ts">
	import { getUiContext } from '$lib/context.svelte';

	const ctx = getUiContext();
</script>

<input class="input-color" type="color" bind:value={ctx.state.background} />
