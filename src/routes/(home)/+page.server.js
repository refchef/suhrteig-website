import { Client } from "@notionhq/client";
import { redirect } from '@sveltejs/kit';
import { SECRET_NOTION_TOKEN } from "$env/static/private";
import { SECRET_DATABASE_ID } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		// Initialize the Notion Client
		const notion = new Client({ auth: SECRET_NOTION_TOKEN });

		const formData = await request.formData();
		console.log('incoming form data',formData);
		const formName = formData.get("form-name");
		const name = formData.get("name");
		const email = formData.get("email");
		const address = formData.get("address");
		const order = formData.get("order");
		const total = formData.get("total");
		const note = formData.get("note") === "" ? "—" : formData.get("note");
		const delivery = formData.get("delivery");
		const confirm = formData.get("confirm");
		console.log('new radio value',delivery);

		(async () => {
			const response = await notion.pages.create({
				parent: {
					type: "database_id",
					database_id: SECRET_DATABASE_ID,
				},
				properties: {
					"Name": {
						"title": [
							{
								"text": {
									"content": name,
								},
							},
						],
					},
					"Email": {
						"email": email,
					},
					"Address": {
						"rich_text": [
							{
								"text": {
									"content": address,
								},
							},
						],
					},
					"Order": {
						"rich_text": [
							{
								"text": {
									"content": order,
								},
							},
						],
					},
					"Total": {
						"number": parseFloat(total),
					},
					"Note": {
						"rich_text": [
							{
								"text": {
									"content": note.toString(),
								},
							},
						],
					},
					"Delivery": {
						"select": {
							"name": delivery,
						}
					},
					"Confirm": {
						"checkbox": JSON.parse(confirm),
					},
				},
			});
			console.log("response message", response);
		})();
		// throw redirect(303, '/success')
	},
};
