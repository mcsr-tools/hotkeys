-- Migration number: 0001 	 2025-10-25T21:39:20.362Z

CREATE TABLE hotkey (
    mc_uuid TEXT PRIMARY KEY NOT NULL,
    mc_name TEXT NOT NULL,
    json_data TEXT NOT NULL,
    json_meta TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(mc_uuid, mc_name)
);
