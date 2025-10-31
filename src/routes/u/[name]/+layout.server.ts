import { sql } from 'kysely';
import { error } from '@sveltejs/kit';
import { getDatabase } from '$lib/server/db';
import { getSession } from '$lib/server/query';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const db = getDatabase();

	const hotkeys = await db
		.selectFrom('hotkey')
		.selectAll()
		.where((eb) => eb(eb.fn('lower', ['mcName']), '=', sql`lower(${event.params.name})`))
		.executeTakeFirst();

	if (hotkeys) {
		return {
			hotkeys,
			new: false
		};
	}

	const { data: session } = await getSession();

	if (
		!session?.user ||
		!session.user.mcName ||
		session.user.mcName.toLowerCase() !== event.params.name.toLowerCase()
	) {
		error(404, 'Not Found');
	}

	return {
		hotkeys: null,
		new: true
	};
};
