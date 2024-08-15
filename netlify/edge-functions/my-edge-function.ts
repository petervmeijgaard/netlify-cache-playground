import { Config, Context } from "@netlify/edge-functions";

export default async function (request: Request, context: Context) {
	console.log("=== === EDGE FUNCTION CALLED === ===");
	console.log(request.url);
	console.log("=== === EDGE FUNCTION CALLED === ===");

	return context.next();
}

export const config: Config = {
	path: "/*",
	excludedPath: [
		"/_next",
		"/_next/*",
		"/__nextjs_original-stack-frame",
		"/favicon.ico",
	],
};
