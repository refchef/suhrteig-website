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


	const { product } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	let currentWeek = dayjs().isoWeek()
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
					<!-- TODO: Create CartSummary.svelte partial -->
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
		<form class="Cart__contact--form" name="bestellungen" method="POST" data-netlify="true" action="/success">
			<input type="hidden" name="form-name" value="bestellungen" />

			<!-- NAME -->
			<label for="name" class="Cart__contact--label"></label>
			<input name="name" class="Cart__contact--input" required placeholder="Name und Vorname" type="text"/>

			<!-- EMAIL -->
			<label for="email"></label>
			<input name="email" class="Cart__contact--input" required placeholder="E-Mail" type="email" />

			<!-- ADDRESS -->
			<label for="address"></label>
			<input name="address" class="Cart__contact--input" required placeholder="Adresse" type="text" />

			<!-- CUSTOMER ORDER -->
			<input name="order" value={order} type="hidden">

			<input class="Cart__contact--submit" type="submit" value="💌  Bestellung abschicken" />

			<span class="Cart__summary--billing">
				<!-- TODO: Text should come from Prismic -->
				Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos. Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos. Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos.
			</span>

			<!-- CONFIRM -->
			<input name="confirm" class="Cart__contact--checkbox" type="checkbox" value="confirm" required bind:checked={confirmOrder}>
			<label for="confirm" class="Cart__contact--checkbox-text"> Ich bestätige meine Bestellung.</label>

		</form>
		<!-- NETLIFY FORM END -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
