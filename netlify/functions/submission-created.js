const {Client} = require("@notionhq/client")

exports.handler = async function (event) {
	const notion = new Client({ auth: process.env.SECRET_NOTION_TOKEN });
	const formData = JSON.parse(event.body).payload.data;

	const formName = formData.get("form-name");
	const name = formData.get("name");
	const email = formData.get("email");
	const address = formData.get("address");
	const order = formData.get("order");
	const total = formData.get("total");
	const note = formData.get("note") === "" ? "—" : formData.get("note");
	const delivery = formData.get("delivery");
	const confirm = formData.get("confirm");

	const new_row = {
		parent: {
			type: "database_id",
			database_id: process.env.SECRET_DATABASE_ID,
		},
		properties: {
			Name: {
				title: [
					{
						text: {
							content: name,
						},
					},
				],
			},
			Email: {
				email: email,
			},
			Address: {
				rich_text: [
					{
						text: {
							content: address,
						},
					},
				],
			},
			Order: {
				rich_text: [
					{
						text: {
							content: order,
						},
					},
				],
			},
			Total: {
				number: parseFloat(total),
			},
			Note: {
				rich_text: [
					{
						text: {
							content: note.toString(),
						},
					},
				],
			},
			Delivery: {
				select: {
					name: delivery,
				},
			},
			Confirm: {
				checkbox: JSON.parse(confirm),
			},
		},
	};
	await notion.pages.create(new_row);
	return {
		statusCode: 200,
	};
};
