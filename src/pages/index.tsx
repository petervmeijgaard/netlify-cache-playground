import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { parseCookies } from "../helpers";

export function getServerSideProps({ res, req }: GetServerSidePropsContext) {
	const cookies = parseCookies(req.headers.cookie ?? "");

	if (cookies.get("exception") === "true") {
		throw new Error("Error thrown from backend");
	}

	const randomNumber = Math.floor(Math.random() * 1000);

	console.log("=== === BACKEND CALLED === ===");
	console.log(randomNumber);
	console.log("=== === BACKEND CALLED === ===");

	res.setHeader(
		"Cache-Control",
		"public, max-age=120, stale-while-revalidate=60, stale-if-error=60",
	);

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, max-age=120, stale-while-revalidate=60, stale-if-error=60",
	);

	return {
		props: {
			randomNumber,
		},
	};
}

export default function Home({
	randomNumber,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return <div>[Non-durable cache] Random number: {randomNumber}</div>;
}
