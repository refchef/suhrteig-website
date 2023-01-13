	/** @type {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const values = await request.formData();
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(values).toString(),
		})
		.then(() => console.log("Form successfully submitted"))
		.catch((error) => alert(error));
	}
};
