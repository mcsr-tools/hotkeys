import * as v from 'valibot';

export const HotkeysSchema = v.object({
	dropItem: v.string(),
	inventory: v.string(),
	perspective: v.string(),
	sneak: v.string(),
	sprint: v.string(),
	f3: v.string(),
	chat: v.string(),
	hotbar: v.pipe(v.array(v.string()), v.length(9)),
	offHand: v.string(),
	movement: v.object({
		forward: v.string(),
		backward: v.string(),
		left: v.string(),
		right: v.string()
	}),
	interactions: v.object({
		attack: v.string(),
		use: v.string(),
		pick: v.string()
	}),
	macro: v.object({
		wide: v.string(),
		thin: v.string(),
		eye: v.object({
			key: v.string(),
			dec: v.string(),
			inc: v.string(),
			reset: v.string()
		})
	})
});

export type Hotkeys = v.InferInput<typeof HotkeysSchema>;

export const MetaSchema = v.object({
	bgColor: v.pipe(v.string(), v.hexColor())
});

export type Meta = v.InferInput<typeof MetaSchema>;
