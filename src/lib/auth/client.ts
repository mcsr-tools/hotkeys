import { inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/svelte';

const origin = import.meta.env.PROD ? 'https://auth.mcsr.tools' : 'http://localhost:5273';
const baseUrl = `${origin}/api/v1`;

export const authClient = createAuthClient({
	baseURL: baseUrl,
	plugins: [
		inferAdditionalFields({
			user: {
				mcName: { type: 'string', required: false },
				mcUuid: { type: 'string', required: false }
			}
		})
	]
});

export function signInWithMinecraft(opts: { callbackUrl: string }) {
	return authClient.signIn.social({
		provider: 'microsoft',
		callbackURL: opts.callbackUrl
	});
}
