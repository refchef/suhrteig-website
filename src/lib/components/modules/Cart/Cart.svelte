<script>
	import { cart } from "$lib/util/cart";
	import { slide } from "svelte/transition";
	import { quintOut } from 'svelte/easing';
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";
	import CartSummary from "$lib/components/partials/CartSummary/CartSummary.svelte";
	import TotalPrice from "$lib/components/partials/TotalPrice/TotalPrice.svelte";
	import messages from "$lib/util/messages";

	export let billing;

	const { product } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	let confirmOrder = false;
	let orderTotalItems;
	let orderTotalPrice;
	let finalOrder = "";
	let finalPrice = null;

	// Calculate total price
	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	// Linked to checkbox confirm
	$: if (confirmOrder === true) {
		finalOrder = orderTotalItems.innerText;
		finalPrice = orderTotalPrice.innerText;
		console.log(finalOrder, finalPrice);
	}

	// Sends order to input field
	$: finalOrder, finalPrice;

	// Send order to Notion
	// async function handleSubmit(event) {
	// 	const form = new FormData(event.target);

	// 	const requestBody = {
	// 		"properties": {
	// 			"Name": {
	// 				"title": [
	// 					{
	// 						"text": {
	// 							"content": form.get("name")
	// 						},
	// 					},
	// 				],
	// 			},
	// 			"Email": {
	// 				"email": form.get("email"),
	// 			},
	// 			"Address": {
	// 				"rich_text": [
	// 					{
	// 						"text": {
	// 							"content": form.get("address")
	// 						},
	// 					},
	// 				],
	// 			},
	// 			"Order": {
	// 				"rich_text": [
	// 					{
	// 						"text": {
	// 							"content": form.get("order")
	// 						},
	// 					},
	// 				],
	// 			},
	// 			"Price": {
	// 				"number": form.get("total")
	// 			},
	// 			"Note": {
	// 				"rich_text": [
	// 					{
	// 						"text": {
	// 							"content": form.get("note")
	// 						},
	// 					},
	// 				],
	// 			},
	// 			"Confirm": {
	// 				"checkbox": form.get("confirm")
	// 			},
	// 			"Collect": {
	// 				"checkbox": form.get("collect")
	// 			},
	// 		}
	// 	};

	// 	const response = await fetch(
	// 		`https://api.notion.com/v1/databases/${PUBLIC_DATABASE_ID}/pages`,
	// 		{
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				"Notion-Version": "2021-05-13",
	// 				"Authorization": `Bearer ${PUBLIC_NOTION_TOKEN}`,
	// 				// "Access-Control-Allow-Origin": "*"
	// 			},
	// 			body: JSON.stringify(requestBody),
	// 		}
	// 	);

	// 	if (response.ok) {
	// 		console.log("New page created in Notion database!");
	// 	} else {
	// 		console.error(
	// 			"Error creating new page in Notion database:",
	// 			await response.text()
	// 		);
	// 	};
	// };

</script>

<section class="Cart" id="cart">
	<!-- CART -->
	<div class="Cart__products">
		<ul class="Cart__products--list">
			<p class="Cart__products--title">{product.title}</p>
				{#if $cart?.length === 0}
					<div class="Cart__products--description">{product.description}</div>
				{:else}
				{#each $cart as product}
					<li class="Cart__products--item" transition:slide="{{duration: 1000, easing: quintOut}}">
						<ProductInCart {product} />
					</li>
				{/each}
			{/if}
		</ul>
	</div>
	<!-- SUMMARY -->
	<div class="Cart__summary">
		<p class="Cart__summary--title">{summary.title}</p>
		{#if $cart.length === 0}
			<div class="Cart__products--description">{summary.emptyCart}</div>
		{:else}
			<div class="Cart__summary--list" >
				<div class="cart__summary--wrapper" bind:this={orderTotalItems}>
					{#each $cart as item}
						<div transition:slide="{{duration: 1000, easing: quintOut}}">
							<CartSummary {item}/>
						</div>
					{/each}
				</div>
				<div class="cart__summary--wrapper" bind:this={orderTotalPrice}>
					<TotalPrice totalMessage={summary.total} {total}/>
				</div>
				<div class="Cart__summary--billing">{@html billing}</div>
			</div>
		{/if}
	</div>

	<!-- KONTAKTANGABEN -->
	<div class="Cart__contact">
		<p class="Cart__contact--title">{contact.title}</p>
		<!-- NETLIFY FORM START -->
		<!-- <form class="Cart__contact--form" name="bestellungen" method="POST" action="/success"> -->
		<form class="Cart__contact--form" name="bestellungen" method="POST" action="/order">
			<input type="hidden" name="form-name" value="bestellungen" />

			<label for="name" class="Cart__contact--label"></label>
			<input name="name" class="Cart__contact--input" required placeholder="Name und Vorname" type="text"/>

			<label for="email"></label>
			<input name="email" class="Cart__contact--input" required placeholder="E-Mail" type="email"/>

			<label for="address"></label>
			<input name="address" class="Cart__contact--input" required placeholder="Adresse" type="text"/>

			<input name="order" value="{finalOrder}" type="hidden">
			<input name="total" value="{finalPrice}" type="hidden">

			<label for="note"></label>
			<input name="note" class="Cart__contact--input" placeholder="Anmerkungen" type="text"/>

			<label class="Cart__contact--checkbox--wrapper">
				<input name="confirm" class="Cart__contact--checkbox" type="checkbox" value="true" required bind:checked={confirmOrder}>
				<span for="confirm" class="Cart__contact--checkbox-text">{contact.confirm}</span>
				<span class="checkmark"></span>
			</label>

			<label class="Cart__contact--checkbox--wrapper">
				<input name="collect" class="Cart__contact--checkbox" type="checkbox" value="true">
				<span for="collect" class="Cart__contact--checkbox-text">{contact.collect}</span>
				<span class="checkmark"></span>
			</label>

			<input class="Cart__contact--submit" type="submit" value="{contact.button}" formaction="/order">
		</form>
		<!-- NETLIFY FORM END -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
