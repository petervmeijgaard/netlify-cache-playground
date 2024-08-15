import { GetServerSidePropsContext } from "next";

export function getServerSideProps({ res }: GetServerSidePropsContext) {
	res.setHeader(
		"Cache-Control",
		"public, max-age=600, stale-while-revalidate=300, stale-if-error=300",
	);

	res.setHeader(
		"Netlify-CDN-Cache-Control",
		"public, max-age=600, stale-while-revalidate=300, stale-if-error=300",
	);

	return {
		props: {},
	};
}

export default function Home() {
	return <div>Hello world!</div>;
}
