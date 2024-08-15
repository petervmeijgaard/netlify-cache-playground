export const parseCookies = (cookieString: string) => {
	const cookies = new Map<string, string>();

	cookieString.split("; ").forEach((cookie) => {
		const [key, value] = cookie.split("=");

		cookies.set(key, value);
	});

	return cookies;
};
