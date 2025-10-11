<script lang="ts">
	import { profileState } from '$lib/state.svelte';

	let nickname = $state(profileState.nickname);

	function commitNickname() {
		profileState.nickname = nickname.trim();
	}
</script>

<div
	class="h-full bg-contain bg-position-[center_2.125rem] bg-no-repeat flex justify-center pt-1.5 overflow-hidden"
	style={`background-image: url(https://nmsr.nickac.dev/bust/${profileState.nickname})`}
>
	<div class="text-sm xl:text-xl text-neutral-100">
		<input
			class="inline-block text-center"
			type="text"
			bind:value={nickname}
			defaultValue={nickname}
			onblur={commitNickname}
			onkeydown={(e) => e.key === 'Enter' && commitNickname()}
		/>
	</div>
</div>
