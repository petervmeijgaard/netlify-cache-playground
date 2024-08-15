import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

export function getServerSideProps({ res }: GetServerSidePropsContext) {
	const randomNumber = Math.floor(Math.random() * 1000);

	res.setHeader(
		"Cache-Control",
		"public, max-age=300, stale-while-revalidate=600, stale-if-error=600",
	);

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, max-age=300, stale-while-revalidate=600, stale-if-error=600",
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
