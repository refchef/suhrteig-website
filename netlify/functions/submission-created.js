const { Client } = require("@notionhq/client");

exports.handler = async function (event) {
	const form = JSON.parse(event.body).payload.data;
	const notion = new Client({ auth: process.env.SECRET_NOTION_TOKEN });
	try {
		const new_row = {
			parent: {
				database_id: process.env.SECRET_DATABASE_ID
			},
			properties: {
				Name: {
					title: [
						{
							text: {
								content: form.name
							}
						}
					]
				},
				Email: {
					email: form.email
				},
				Address: {
					rich_text: [
						{
							text: {
								content: form.address
							}
						}
					]
				},
				Order: {
					rich_text: [
						{
							type: text,
							text: {
								content: form.order
							}
						}
					]
				},
				Price: {
					number: form.total
				},
				Note: {
					rich_text: [
						{
							type: text,
							text: {
								content: form.note
							}
						}
					]
				},
				Confirm: {
					checkbox: form.confirm
				},
				Collect: {
					checkbox: form.collect
				}
			}
		};
		await notion.pages.create(new_row);
	}
	catch {
		console.log(error)
	}
	return {
		statusCode: 200,
	};
};
