<script>
	import { onMount } from "svelte";
	import { cart } from "$lib/util/cart";
	import { fade, fly, slide, blur, scale } from "svelte/transition";
	import { quintOut } from 'svelte/easing';
	import messages from "$lib/util/messages";
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";
	import dayjs from "dayjs";
	import isoWeek from 'dayjs/plugin/isoWeek.js';
	dayjs.extend(isoWeek)

	let currentWeek = dayjs().isoWeek()
	console.log(currentWeek);

	const { product } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	let customerOrder;
	let confirmOrder = false;
	let order = "";

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	$: if (confirmOrder === true) {
		console.log("order confirmed", customerOrder.innerText)
		order = customerOrder.innerText
	}

	$: order;

</script>

<section class="Cart">
	<!-- WARENKORB -->
	<div class="Cart__products">
		<ul class="Cart__products--list">
			<p class="Cart__products--title">{product.title}</p>
				{#if $cart?.length === 0}
					<div>{product.description}</div>
				{:else}
				{#each $cart as product}
					<li class="Cart__products--item" transition:slide="{{duration: 250, easing: quintOut}}">
						<ProductInCart {product} />
					</li>
				{/each}
			{/if}
		</ul>
	</div>
	<!-- ZUSAMMENFASSUNG -->
	<div class="Cart__summary">
		<p class="Cart__summary--title">{summary.title}</p>
		{#if $cart.length === 0}
			<div>{summary.emptyCart}</div>
		{:else}
			<div class="Cart__summary--list" bind:this={customerOrder}>
				<div transition:slide="{{duration: 250, easing: quintOut}}">
					{summary.fullCart}
					{#each $cart as item}
					<div class="Cart__summary--item" >
						<span class=" Cart__summary--highlight item--details" >
							{#key item.quantity}
								<span>{item.quantity}x</span>
							{/key}
							{item.productname}
						</span>
						<span class="Cart__summary--highlight item--price">
							für CHF {item.quantity * item.price}
						</span>
					</div>
					{/each}
					<br />
					{summary.total}
					<br />
					<strong class="Cart__summary--highlight">CHF {total}</strong>
					<br />
				</div>
			</div>
		{/if}
	</div>

	<!-- KONTAKTANGABEN -->
	<div class="Cart__contact">
		<p class="Cart__contact--title">{contact.title}</p>
		<!-- NETLIFY FORM START -->
		<form class="Cart__contact--form" name="Bestellungen-{currentWeek}" method="POST" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="Bestellungen-{currentWeek}" />

			<label class="Cart__contact--label" for="name"></label>
			<input class="Cart__contact--input" name="name" required placeholder="Name und Vorname" type="text" />

			<label for="email"></label>
			<input class="Cart__contact--input" name="email" required placeholder="E-Mail oder Telefon" type="email" />

			<label for="message"></label>
			<input class="Cart__contact--input" name="address" required placeholder="Adresse" type="text" />

			<!-- Insert customerOrder here -->
			<input type="hidden" name="order" bind:value={order}>

			<input class="Cart__contact--submit" type="submit" value="💌  Bestellung abschicken" />

			<span class="Cart__summary--billing">
				Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos.  Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos. Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos.
			</span>
			<label class="Cart__contact--checkbox-text" for="confirm">
				<input class="Cart__contact--checkbox" type="checkbox" name="confirm" required bind:checked={confirmOrder}>
				Ich bestätige meine Bestellung.
			</label>
		</form>
		<!-- NETLIFY FORM END -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
