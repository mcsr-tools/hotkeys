<script lang="ts">
	import { getHotkeysContext } from '$lib/hotkeys.context';
	import { twMerge } from 'tailwind-merge';

	const ctx = getHotkeysContext();

	let {
		value = $bindable(),
		...props
	}: {
		value: string;
		class?: string;
	} = $props();

	const defaultValue = $state(value);
</script>

<span
	tabindex={ctx && !ctx.isEditable() ? -1 : 0}
	role="textbox"
	contenteditable={ctx && !ctx.isEditable() ? 'false' : 'true'}
	onkeyup={({ currentTarget: { innerText } }) => (value = innerText)}
	class={twMerge(
		'lg:text-md flex min-h-8 items-center justify-center rounded-full bg-black px-2 py-0.5 text-sm text-nowrap text-white xl:px-4 xl:text-lg',
		props.class
	)}
>
	{defaultValue}
</span>
