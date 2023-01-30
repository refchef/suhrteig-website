<script>
	import { cart } from "$lib/util/cart";
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";
	import messages from "$lib/util/messages";
	import dayjs from "dayjs";
	import isoWeek from 'dayjs/plugin/isoWeek.js';
	import { slide } from "svelte/transition";
	import { quintOut } from 'svelte/easing';
	import CartSummary from "$lib/components/partials/CartSummary/CartSummary.svelte";
	import TotalPrice from "$lib/components/partials/TotalPrice/TotalPrice.svelte";

	dayjs.extend(isoWeek)

	export let billing;

	const { product } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	let confirmOrder = false;
	let orderTotalItems;
	let orderTotalPrice;
	let finalOrder = "";
	let finalPrice = null;

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	$: if (confirmOrder === true) {
		finalOrder = orderTotalItems.innerText;
		finalPrice = orderTotalPrice.innerText;
		console.log('final order', finalOrder, finalPrice);
	}

	$: finalOrder, finalPrice;

</script>

<section class="Cart">
	<!-- CART -->
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
	<!-- SUMMARY -->
	<div class="Cart__summary">
		<p class="Cart__summary--title">{summary.title}</p>
		{#if $cart.length === 0}
			<div>{summary.emptyCart}</div>
		{:else}
			<div class="Cart__summary--list">
				<div transition:slide="{{duration: 250, easing: quintOut}}">
					<div class="cart__summary--wrapper" bind:this={orderTotalItems}>
						{#each $cart as item}
							<CartSummary {item}/>
						{/each}
					</div>
					<div class="cart__summary--wrapper" bind:this={orderTotalPrice}>
						<TotalPrice totalMessage={summary.total} {total}/>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- KONTAKTANGABEN -->
	<div class="Cart__contact">
		<p class="Cart__contact--title">{contact.title}</p>
		<!-- NETLIFY FORM START -->
		<form class="Cart__contact--form" name="bestellungen" method="post" action="/success">
			<input type="hidden" name="form-name" value="bestellungen" />

			<label for="name" class="Cart__contact--label"></label>
			<input name="name" class="Cart__contact--input" required placeholder="Name und Vorname" type="text"/>

			<label for="email"></label>
			<input name="email" class="Cart__contact--input" required placeholder="E-Mail" type="email"/>

			<label for="address"></label>
			<input name="address" class="Cart__contact--input" required placeholder="Adresse" type="text"/>

			<input name="order" value="{finalOrder}" type="hidden">
			<input name="total" value="{finalPrice}" type="hidden">

			<input class="Cart__contact--submit" type="submit" value="{contact.button}">
			<span class="Cart__summary--billing">{@html billing}</span>

			<label for="confirm" class="Cart__contact--checkbox-text">{contact.confirm}</label>
			<input name="confirm" class="Cart__contact--checkbox" type="checkbox" value="confirm" required bind:checked={confirmOrder}>
		</form>
		<!-- NETLIFY FORM END -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
