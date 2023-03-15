import {SECRET_DATABASE_ID, SECRET_NOTION_TOKEN} from "$env/static/privat";

/** @type {import('./$types').Actions} */
export const actions = {
	order: async ({ event }) => {
		console.log("event log", event)
		const form = new FormData(event.target);

		const requestBody = {
			"properties": {
				"Name": {
					"title": [
						{
							"text": {
								"content": form.get("name")
							},
						},
					],
				},
				"Email": {
					"email": form.get("email"),
				},
				"Address": {
					"rich_text": [
						{
							"text": {
								"content": form.get("address")
							},
						},
					],
				},
				"Order": {
					"rich_text": [
						{
							"type": text,
							"text": {
								"content": form.get("order")
							},
						},
					],
				},
				"Price": {
					"number": form.get("total")
				},
				"Note": {
					"rich_text": [
						{
							"type": text,
							"text": {
								"content": form.get("note")
							},
						},
					],
				},
				"Confirm": {
					"checkbox": form.get("confirm")
				},
				"Collect": {
					"checkbox": form.get("collect")
				},
			}
		};

		const response = await fetch(
			`https://api.notion.com/v1/databases/${SECRET_DATABASE_ID}/pages`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Notion-Version": "2021-05-13",
					Authorization: `Bearer ${SECRET_NOTION_TOKEN}`,
				},
				body: JSON.stringify(requestBody),
			}
		);

		if (response.ok) {
			console.log("New page created in Notion database!");
		} else {
			console.error(
				"Error creating new page in Notion database:",
				await response.text()
			);
		}
	},
};
