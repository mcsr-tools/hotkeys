import * as v from 'valibot';
import { command } from '$app/server';
import { HotkeysSchema, MetaSchema } from '$lib/schema';
import { getDatabase } from '$lib/server/db';
import { getUser } from '$lib/server/query';

export const saveHotkeys = command(
	v.object({
		hotkeys: HotkeysSchema,
		meta: MetaSchema
	}),
	async (data) => {
		const user = await getUser();
		const db = getDatabase();
		const result = await db
			.insertInto('hotkey')
			.values({
				mcUuid: user.mcUuid,
				mcName: user.mcName,
				jsonData: JSON.stringify(data.hotkeys),
				jsonMeta: JSON.stringify(data.meta)
			})
			.onConflict((ocb) =>
				ocb.columns(['mcUuid', 'mcName']).doUpdateSet(() => ({
					jsonData: JSON.stringify(data.hotkeys),
					jsonMeta: JSON.stringify(data.meta),
					updatedAt: new Date().toISOString()
				}))
			)
			.executeTakeFirst();
		return result.insertId;
	}
);
