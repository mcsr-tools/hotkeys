<script lang="ts">
	import toast from 'svelte-french-toast';
	import UiColorPicker from '$lib/components/ui-color-picker.svelte';

	async function copyUrl() {
		toast.promise(
			globalThis.navigator.clipboard.writeText(globalThis.window.location.toString()),
			{
				loading: 'Copying...',
				success: 'URL copied to clipboard!',
				error: 'Failed to copy to clipboard :('
			},
			{
				position: 'top-center'
			}
		);
	}
</script>

<div class="action-bar">
	<UiColorPicker />
	<button class="btn" type="button" onclick={copyUrl}>Copy your hotkeys page URL</button>
	<span>or share this page which is automatically updated</span>
</div>
