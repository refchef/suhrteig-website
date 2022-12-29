import {getRef, previewSessionCookie, prismicQuery} from "$lib/util/prismic.js";

// /** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const previewToken = cookies.get(previewSessionCookie);
	const ref = previewToken || await getRef(fetch);

	return {
		previewToken,
		ref
	}
}