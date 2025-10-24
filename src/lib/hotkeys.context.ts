import { getContext, setContext } from 'svelte';

type Context = {
	isEditable: (name?: string) => boolean;
};

const key = 'hotkeys';

export function setHotkeysContext(ctx: Context) {
	setContext(key, ctx);
}

export function getHotkeysContext() {
	return getContext(key) as Context | undefined;
}
