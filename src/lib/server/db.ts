import {
	CamelCasePlugin,
	Kysely,
	ParseJSONResultsPlugin,
	type ColumnType,
	type JSONColumnType
} from 'kysely';
import { D1Dialect } from 'kysely-d1';
import { error } from '@sveltejs/kit';
import { getRequestEvent } from '$app/server';
import type { Hotkeys, Meta } from '$lib/schema';

interface TableHotkey {
	mcUuid: string;
	mcName: string;
	jsonData: JSONColumnType<Hotkeys>;
	jsonMeta: JSONColumnType<Meta>;
	createdAt: ColumnType<Date, string | undefined, never>;
	updatedAt: ColumnType<Date, string | undefined, string>;
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
			plugins: [new ParseJSONResultsPlugin(), new CamelCasePlugin()]
		});
	}
	return db;
}
