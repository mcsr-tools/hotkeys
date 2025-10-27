import { Kysely, ParseJSONResultsPlugin, type ColumnType, type JSONColumnType } from 'kysely';
import { D1Dialect } from 'kysely-d1';
import { error } from '@sveltejs/kit';
import { getRequestEvent } from '$app/server';
import type { Hotkeys, Meta } from '$lib/schema';

interface TableHotkey {
	mc_uuid: string;
	mc_name: string;
	json_data: JSONColumnType<Hotkeys>;
	json_meta: JSONColumnType<Meta>;
	created_at: ColumnType<Date, string | undefined, never>;
	updated_at: ColumnType<Date, string | undefined, string>;
}

interface Database {
	hotkey: TableHotkey;
}

let db: Kysely<Database> | null;

export function getDatabase() {
	if (!db) {
		const event = getRequestEvent();
		if (!event.platform?.env.DB) {
			error(503, 'Database is unreachable');
		}
		db = new Kysely<Database>({
			dialect: new D1Dialect({ database: event.platform!.env.DB }),
			log: ['query', 'error'],
			plugins: [new ParseJSONResultsPlugin()]
		});
	}
	return db;
}
