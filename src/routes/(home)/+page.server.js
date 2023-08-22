import { Client } from "@notionhq/client";
import sgMail from "@sendgrid/mail";
import { redirect } from "@sveltejs/kit";
import { SECRET_NOTION_TOKEN } from "$env/static/private";
import { SECRET_DATABASE_ID } from "$env/static/private";
import { SENDGRID_API_KEY } from "$env/static/private";

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {

		// FORM DATA
		const formData = await request.formData();
		const formName = formData.get("form-name");
		const name = formData.get("name");
		const email = formData.get("email");
		const address = formData.get("address");
		const order = formData.get("order");
		const total = formData.get("total");
		const note = formData.get("note") === "" ? "—" : formData.get("note");
		const delivery = formData.get("delivery");
		const confirm = formData.get("confirm");

		// SEND EMAIL NOTIFICATION
		sgMail.setApiKey(SENDGRID_API_KEY);
		const msg = {
			to: "suhrteig@gmail.com",
			from: "suhrteig@gmail.com", // Use the email address or domain you verified in SendGrid UI
			subject: "Neue Suhrteig Bestellung 💌",
			html:
				`Name: ${name}</br>
				<hr>
				Email: ${email}</br>
				<hr>
				Adresse: ${address}</br>
				<hr>
				Delivery: ${delivery}</br>
				<hr>
				Bestellung: ${order}</br>
				<hr>
				Total: ${total} CHF</br>
				<hr>
				Bestellung in <a href="https://www.notion.so/refchef/${SECRET_DATABASE_ID}">Notion</a> öffnen</br>
				<hr>`,
		};
		(async () => {
			try {
				await sgMail.send(msg);
			} catch (error) {
				console.error(error);

				if (error.response) {
					console.error(error.response.body);
				}
			}
		})();

		// INITIALIZE NOTION
		const notion = new Client({ auth: SECRET_NOTION_TOKEN });

		// SEND DATA TO NOTION
		const response = await notion.pages.create({
			parent: {
				type: "database_id",
				database_id: SECRET_DATABASE_ID,
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
		});
		console.log("response message", response);
		throw redirect(303, "/success");
	},
};
