<script lang="ts">
	import Key from '$lib/components/hotkeys/key.svelte';
	import Option from '$lib/components/hotkeys/option.svelte';
	import { twMerge } from 'tailwind-merge';

	let {
		key = $bindable(),
		...props
	}: {
		option: string;
		key: string;
		inline?: boolean;
		reverse?: boolean;
	} = $props();
</script>

<div
	class={twMerge(
		'flex h-full flex-col items-center justify-center gap-2',
		props.inline && 'flex-row',
		props.reverse ? (props.inline ? 'flex-row-reverse' : 'flex-col-reverse') : null
	)}
>
	<Option>
		{props.option}
	</Option>
	<Key bind:value={key} />
</div>
