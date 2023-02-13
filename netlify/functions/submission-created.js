/*
This will just respond with the OK status code, but you can expand this for your functionality.
*/

const {Client} = require("@notionhq/client")

exports.handler = async function (event) {
	const notion = new Client({ auth: process.env.NOTION_TOKEN });
	const form = JSON.parse(event.body).payload.data
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
		},
	}
	await notion.pages.create(new_row);
	return {
	  statusCode: 200
	}
  }
