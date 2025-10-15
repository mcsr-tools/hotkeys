<script lang="ts">
	import { getHotkeysContext } from '$lib/hotkeys.context';
	import { profileState } from '$lib/state.svelte';

	const ctx = getHotkeysContext();

	let nickname = $state(profileState.nickname);

	function commitNickname() {
		profileState.nickname = nickname.trim();
	}
</script>

<div
	class="flex h-full justify-center overflow-hidden bg-contain bg-position-[center_2.125rem] bg-no-repeat pt-1.5"
	style={`background-image: url(https://nmsr.nickac.dev/bust/${profileState.nickname})`}
>
	<div class="text-sm text-neutral-100 xl:text-xl">
		<input
			class="inline-block text-center"
			type="text"
			disabled={ctx?.editable === false}
			bind:value={nickname}
			defaultValue={nickname}
			onblur={commitNickname}
			onkeydown={(e) => e.key === 'Enter' && commitNickname()}
		/>
	</div>
</div>
