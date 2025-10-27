import { getDatabase } from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const db = getDatabase();

	const hotkeys = await db
		.selectFrom('hotkey')
		.selectAll()
		.where('mc_name', '=', event.params.name)
		.executeTakeFirst();

	if (!hotkeys) {
		error(404, 'Not Found');
	}

	return {
		hotkeys
	};
};
