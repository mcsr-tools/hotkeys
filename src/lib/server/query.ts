import { error } from '@sveltejs/kit';
import { query, getRequestEvent } from '$app/server';
import { authClient } from '$lib/auth/client';

export const getSession = query(async () => {
	const event = getRequestEvent();
	const session = await authClient.getSession({
		fetchOptions: {
			customFetchImpl: event.fetch
		}
	});
	return session;
});

export const getUser = query(async () => {
	const session = await getSession();

	if (!session.data?.user.mcUuid || !session.data?.user.mcName) {
		error(401);
	}

	// type safety
	const { mcUuid, mcName } = session.data.user;
	return { ...session.data.user, mcUuid, mcName };
});
