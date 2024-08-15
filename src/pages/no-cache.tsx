import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { parseCookies } from "../helpers";

export function getServerSideProps({ res, req }: GetServerSidePropsContext) {
	const cookies = parseCookies(req.headers.cookie ?? "");

	if (cookies.get("exception") === "true") {
		throw new Error("Error thrown from backend");
	}

	const randomNumber = Math.floor(Math.random() * 1000);

	console.log("=== === [NO CACHE] BACKEND CALLED === ===");
	console.log(randomNumber);
	console.log("=== === [NO CACHE] BACKEND CALLED === ===");

	res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, max-age=0, must-revalidate",
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
	return <div>[No cache] Random number: {randomNumber}</div>;
}
