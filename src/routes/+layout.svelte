<script lang="ts">
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import { setUiContext } from '$lib/context.svelte';
	import GithubCorner from '$lib/components/github-corner.svelte';

	let { children } = $props();

	setUiContext({
		background: '#3a405a'
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="container mx-auto px-2 pt-10">
	<div class="rounded-2xl bg-white/30 p-4 text-black drop-shadow-xl backdrop-blur-sm lg:hidden">
		Your current resolution is not supported. Please view this page in desktop mode.
	</div>
	<div class="hidden lg:block">
		<header>
			<GithubCorner />
			<hgroup class="mx-auto max-w-prose text-center">
				<h1 class="text-6xl font-extralight tracking-wide">
					<a href={resolve('/')}>MCSR Hotkeys</a>
				</h1>
				<p class="mt-2 font-light">Share your hotkeys!</p>
			</hgroup>
		</header>
		<div class="mt-12">
			{@render children?.()}
		</div>
	</div>
</main>

<Toaster />
