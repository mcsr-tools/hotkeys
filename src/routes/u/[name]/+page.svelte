<script lang="ts">
	import toast from 'svelte-french-toast';
	import { authClient } from '$lib/auth/client';
	import { getHotkeysContext, getUiContext } from '$lib/context.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import UiColorPicker from '$lib/components/ui-color-picker.svelte';
	import { saveHotkeys } from './hotkeys.remote';

	const session = authClient.useSession();

	let { params, data } = $props();
	let isNew = $state(data.new);

	const ctxUi = getUiContext();
	const ctxHotkeys = getHotkeysContext();

	async function save() {
		await toast.promise(
			saveHotkeys({
				hotkeys: ctxHotkeys.state,
				meta: {
					bgColor: ctxUi.state.background
				}
			}).then(() => {
				isNew = false;
			}),
			{
				loading: 'Saving...',
				success: `Hotkeys ${isNew ? 'created' : 'saved'}!`,
				error: `Failed to ${isNew ? 'create' : 'save'} hotkeys`
			},
			{
				position: 'top-center'
			}
		);
	}
</script>

<svelte:head>
	{#if data.hotkeys?.mcName}
		<title>{data.hotkeys.mcName} | MCSR Hotkeys</title>
		<meta
			name="description"
			content={`${data.hotkeys.mcName}'s Minecraft speedrunning hotkeys.'`}
		/>
	{/if}
</svelte:head>

<div class="relative">
	<Visualizer />
	{#if isNew}
		<div
			class="absolute top-0 right-0 bottom-0 left-0 m-px rounded-4xl bg-emerald-100/10 backdrop-blur-sm"
		></div>
		<div class="absolute top-0 right-0 bottom-0 left-0 grid place-items-center">
			<button class="btn" onclick={save}>Create your hotkeys page {params.name}!</button>
		</div>
	{/if}
</div>

{#if $session.data?.user.mcName?.toLowerCase() === params.name.toLowerCase() && !isNew}
	<div class="action-bar">
		<UiColorPicker />
		<button class="btn" onclick={save}>
			{#if isNew}Create{:else}Save your hotkeys{/if}
		</button>
	</div>
{/if}
