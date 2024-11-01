// Here's an explanation why this is needed: https://timdeschryver.dev/blog/environment-variables-with-sveltekit

export const env = {
	siteName: "Suhrteig",
	basePath: import.meta.env.VITE_BASE_URL,
	graphQlApi: `https://${import.meta.env.VITE_PRISMIC_REPO}.cdn.prismic.io/graphql`,
	prismicRepo: import.meta.env.VITE_PRISMIC_REPO
};
