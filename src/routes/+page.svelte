<script lang="ts">
	import { resolve } from '$app/paths';
	import { authClient, signInWithMinecraft } from '$lib/auth/client';
	import CreeperFace from '$lib/components/creeper-face.svelte';
	import Visualizer from '$lib/components/visualizer.svelte';
	import { hotkeysState, profileState, uiState } from '$lib/state.svelte';

	const session = authClient.useSession();

	const hotkeysPage = $derived(
		$session.data?.user.mcName
			? resolve(`/u/${$session.data?.user.mcName}`)
			: resolve(
					`/v1/${btoa(
						JSON.stringify({
							hotkeys: hotkeysState,
							profile: profileState,
							ui: uiState
						})
					)}`
				)
	);
</script>

<Visualizer />

<div class="mt-10 inline-flex items-center gap-2 rounded-xl bg-neutral-950/75 p-4">
	<input
		class="size-8 rounded-full border-2 border-white hover:cursor-pointer"
		type="color"
		bind:value={uiState.background}
	/>
	<a
		class="rounded-2xl bg-linear-to-r from-emerald-200 to-emerald-50 px-3 py-1 font-light text-neutral-800 drop-shadow-lg transition-all hover:from-emerald-300 hover:to-emerald-100 hover:drop-shadow-xl"
		href={hotkeysPage}
	>
		View your hotkeys page
	</a>
	{#if $session.isPending}
		<span class="text-neutral-200">loading...</span>
	{:else if $session.data}
		{#if $session.data.user.mcName}
			<span class="text-neutral-200">welcome back</span>
			<span class="font-mc text-lg font-bold text-neutral-200">{$session.data.user.mcName}</span>
		{:else}
			<span class="font-mc font-bold text-red-300">
				(ERROR: Minecraft data unavailable, try again)
			</span>
		{/if}
		<button
			class="flex items-center gap-2 bg-mc px-3 py-2 font-mc text-neutral-50 hover:cursor-pointer"
			onclick={() => authClient.signOut()}
		>
			Sign out
		</button>
	{:else}
		<span class="text-neutral-200">or</span>
		<button
			class="flex items-center gap-2 bg-mc px-3 py-2 font-mc text-neutral-50 hover:cursor-pointer"
			onclick={() => signInWithMinecraft({ callbackUrl: globalThis.window.location.toString() })}
		>
			<CreeperFace />
			Sign in
		</button>
		<span class="text-neutral-200">first for a personalized URL</span>
	{/if}
</div>
