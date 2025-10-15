import { getContext, setContext } from 'svelte';

type Context = {
	editable: boolean;
};

const key = 'hotkeys';

export function setHotkeysContext(ctx: Context) {
	setContext(key, ctx);
}

export function getHotkeysContext() {
	return getContext(key) as Context | undefined;
}
