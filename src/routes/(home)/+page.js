import query from "$lib/graphql/query/getHomepage.graphql"
import {prismicQuery} from "$lib/util/prismic.js";

// WHY?
// export const ssr = false;
export const prerender = true;

// /** @type {import('./$types').PageServerLoad} */
// /** @type {import('./$types').PageLoad} */
export async function load({ parent, fetch }) {
	const {ref} = await parent();
	const data = await prismicQuery({ query, fetch, ref });
	const homepage = data?.allHomepages?.homepage;

	return {
		homepage
	}
}
