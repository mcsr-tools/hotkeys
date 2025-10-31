import { createContext } from 'svelte';
import type { Hotkeys } from '$lib/schema';

export const [getVisualizerContext, setVisualizerContext] = createContext<{
	isEditable: (name?: string) => boolean;
}>();

export const [getHotkeysContext, setHotkeysContext] = createStatefulContext<Hotkeys>();

export const [getUiContext, setUiContext] = createStatefulContext<{
	background: string;
}>();

export const [getProfileContext, setProfileContext] = createStatefulContext<{
	name: string;
}>();

function createStatefulContext<T extends object>() {
	const [get, set] = createContext<{ state: T }>();
	return [
		get,
		(context: T) => {
			const state = $state(context);
			set({ state });
		}
	] as const;
}
