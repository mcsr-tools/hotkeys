import { query } from '$app/server';
import { getDatabase } from '$lib/server/db';

export const getHotkeysList = query(() => {
	const db = getDatabase();
	return db
		.selectFrom('hotkey')
		.select(['mcName', 'updatedAt'])
		.orderBy('createdAt', 'desc')
		.limit(5)
		.execute();
});
