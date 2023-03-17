const { Client } = require('@notionhq/client');

import { SECRET_DATABASE_ID } from "$env/static/private";
import { SECRET_NOTION_TOKEN } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {

		const notion = new Client({ auth: process.env.SECRET_NOTION_TOKEN });
		const formData = await request.formData()

		const formName = formData.get('form-name');
		const name = formData.get('name');
		const email = formData.get('email');
		const address = formData.get('address');
		const order = formData.get('order');
		const total = formData.get('total');
		const note = formData.get('note');
		const confirm = formData.get('confirm');
		const collect = formData.get('collect');

		const new_row = {
			"parent": {
				"database_id": process.env.SECRET_DATABASE_ID,
			},
			"properties": {
				"Name": {
					"title": [
						{
							"text": {
								"content": name
							},
						},
					],
				},
				"Email": {
					"email": email
				},
				"Address": {
					"rich_text": [
						{
							"text": {
								"content": address
							},
						},
					],
				},
				"Order": {
					"rich_text": [
						{
							"text": {
								"content": order
							},
						},
					],
				},
				"Price": {
					"number": total
				},
				"Note": {
					"rich_text": [
						{
							"text": {
								"content": note
							},
						},
					],
				},
				"Confirm": {
					"checkbox": confirm
				},
				"Collect": {
					"checkbox": collect
				},
			}

		// };

		// const response = await fetch(
		// 	`https://api.notion.com/v1/databases/${SECRET_DATABASE_ID}/pages`,
		// 	{
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			"Notion-Version": "2021-05-13",
		// 			Authorization: `Bearer ${SECRET_NOTION_TOKEN}`,
		// 		},
		// 		body: JSON.stringify(requestBody),
		// 	}
		// );

		// return { success: true }

		// if (response.ok) {
		// 	console.log("New page created in Notion database!");
		// } else {
		// 	console.error(
		// 		"Error creating new page in Notion database:",
		// 		await response.text()
		// 	);
		// }
		};
		await notion.pages.create(new_row);

	},
};
