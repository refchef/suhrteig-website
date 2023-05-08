<script>
	import { cart } from "$lib/util/cart";
	import { validateEmail } from "$lib/util/helper";
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

	let checkForEmail;
	let confirmOrder = false;
	let submitDisabled = true;
	// let collectOrder = false;
	let orderTotalItems;
	let orderTotalPrice;
	let delivery = "";
	let finalOrder = "";
	let textPrice = "";
	let finalPrice = null;

	// Calculate total price
	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	// Linked to checkbox confirm
	$: if (confirmOrder === true) {
		finalOrder = orderTotalItems.innerText;
		textPrice = orderTotalPrice.innerText.match(/[\d\.]+/);
		finalPrice = textPrice[0];
		submitDisabled = false;
		console.log('this should be the final order',finalOrder);

	}
	$: if (confirmOrder === false) {
		submitDisabled = true;
	}

	const loadingHandler = () => {
		contact.button = "laden ..."
	}

	// Sends order to hidden input field
	$: finalOrder, finalPrice;

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
							<!-- WIP HERE -->
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
		<!-- FORM START -->
		<form class="Cart__contact--form" name="bestellungen" method="POST">
			<input type="hidden" name="form-name" value="bestellungen" />

			<label for="name" class="Cart__contact--label"></label>
			<input name="name" class="Cart__contact--input" required placeholder="Name und Vorname" type="text"/>

			<label for="email"></label>
			<input name="email" class="Cart__contact--input" required bind:value={checkForEmail} placeholder="E-Mail" type="email" class:field-success={validateEmail(checkForEmail)}/>

			<label for="address"></label>
			<input name="address" class="Cart__contact--input" required placeholder="Adresse" type="text"/>

			<input name="order" value={finalOrder} type="hidden">
			<input name="total" value={finalPrice} type="hidden">

			<label for="note"></label>
			<input name="note" class="Cart__contact--input" placeholder="Anmerkungen" type="text"/>


			<div class="Radio__info">
				{@html contact.radius}
			</div>
			<div class="Radio__wrapper">
				<div class="Radio__item">
					<input id="delivery" type="radio" name="delivery" checked value="Delivery">
					<label for="delivery" class="Radio__Label --delivery">Delivery</label>
				</div>
				<div class="Radio__item">
					<input id="pickup" type="radio" name="delivery" value="Pick Up">
					<label for="pickup" class="Radio__Label --pickUp">Pick Up</label>
				</div>
			</div>

			<label class="Checkbox__wrapper">
				<input name="confirm" disabled={$cart.length === 0} class="Cart__contact--checkbox" type="checkbox" value={confirmOrder} required bind:checked={confirmOrder}>
				<span for="confirm" class="checkmark">{contact.confirm}</span>
			</label>

			<input class="Cart__contact--submit" type="submit" disabled={submitDisabled} on:click={loadingHandler} value="{contact.button}">
		</form>
		<!-- NETLIFY FORM END -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
