const { Client } = require("@notionhq/client");

exports.handler = async function (event) {
	const notion = new Client({ auth: process.env.NOTION_TOKEN });
	const form = JSON.parse(event.body).payload.data;
	const new_row = {
		parent: {
			database_id: process.env.DATABASE_ID,
		},
		properties: {
			Name: {
				title: [
					{
						text: {
							content: form.name,
						},
					},
				],
			},
			Email: {
				email: form.email,
			},
			Address: {
				rich_text: form.address,
			},
			Order: {
				rich_text: form.order,
			},
			Price: {
				number: {
					format: franc,
					number: form.price
				},
			},
			Note: {
				rich_text: form.note,
			},
			Confirm: {
				checkbox: form.confirm
			},
			Collect: {
				checkbox: form.collect
			}
		},
	};
	await notion.pages.create(new_row);
	return {
		statusCode: 200,
	};
};
