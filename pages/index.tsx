import { GetServerSidePropsContext } from "next";

export function getServerSideProps({ res }: GetServerSidePropsContext) {
	res.setHeader(
		"Cache-Control",
		"public, max-age=300, stale-while-revalidate=600, stale-if-error=600",
	);

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, max-age=300, stale-while-revalidate=600, stale-if-error=600",
	);

	return {
		props: {},
	};
}

export default function Home() {
	return <div>Hello world!</div>;
}
