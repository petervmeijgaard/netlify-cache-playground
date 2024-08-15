import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export function getServerSideProps({ res }: GetServerSidePropsContext) {
	const randomNumber = Math.floor(Math.random() * 1000);

	console.log("=== === BACKEND CALLED === ===");

	res.setHeader(
		"Cache-Control",
		"public, durable, max-age=60, stale-while-revalidate=120, stale-if-error=120",
	);

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, durable, max-age=60, stale-while-revalidate=120, stale-if-error=120",
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
	return <div>{randomNumber}</div>;
}
