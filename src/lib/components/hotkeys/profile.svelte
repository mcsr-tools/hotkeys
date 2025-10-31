<script lang="ts">
	import { getProfileContext, getVisualizerContext } from '$lib/context.svelte';

	const ctxVisualizer = getVisualizerContext();
	const ctxProfile = getProfileContext();

	function setName(name: string) {
		ctxProfile.state.name = name.trim();
	}
</script>

<div
	class="flex h-full justify-center overflow-hidden bg-contain bg-position-[center_2.125rem] bg-no-repeat pt-1.5"
	style={`background-image: url(https://nmsr.nickac.dev/bust/${ctxProfile.state.name})`}
>
	<div class="text-sm text-neutral-100 xl:text-xl">
		<input
			class="inline-block text-center font-mc"
			type="text"
			disabled={ctxVisualizer && !ctxVisualizer.isEditable('profile')}
			value={ctxProfile.state.name}
			onblur={(e) => setName(e.currentTarget.value)}
			onkeydown={(e) => e.key === 'Enter' && setName(e.currentTarget.value)}
		/>
	</div>
</div>
