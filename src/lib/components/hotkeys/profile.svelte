<script lang="ts">
	import { profileState } from '$lib/state.svelte';

	let nickname = $state(profileState.nickname);

	function commitNickname() {
		profileState.nickname = nickname.trim();
	}
</script>

<div class="flex h-full flex-col items-center justify-center gap-2 text-neutral-200">
	<img
		class="rounded-m size-8 xl:size-14"
		src={`https://minotar.net/helm/${profileState.nickname}/100.png`}
		alt={`${profileState.nickname}'s Minecraft profile picture`}
	/>
	<div class="text-sm xl:text-xl">
		<input
			class="inline-block text-center"
			type="text"
			bind:value={nickname}
			onblur={commitNickname}
			onkeydown={(e) => e.key === 'Enter' && commitNickname()}
		/>
	</div>
</div>
