<script>
	import { onMount } from "svelte";
	import { addToCart } from "$lib/util/cart";
	import { slide } from "svelte/transition";
	import { quintOut } from 'svelte/easing';
	import messages from "$lib/util/messages";
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";



	const { cart } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	// const prices = Object.entries($addToCart)

	console.log($addToCart);

	let customerOrder;
	const prices = [];
	// onMount(() => {
	// })
	$: prices.push($addToCart.forEach(element => element.price));
	// $: sum = $addToCart.forEach(element => console.log(element.price));
	// $: console.log("prices", prices);

	// THIS WORKS!
	$: sum = prices.reduce((total, element) => total + element, 0);

	//   console.log("totalPrice", totalPrice)
	let counter;
</script>

<section class="cart">
	<ul class="cart__summary">
		<p class="cart__summary__title">{cart.title}</p>
		{#if $addToCart?.length === 0}
			<p>{cart.description}</p>
		{:else}
			{#each $addToCart as product}
				<li class="cart__item" transition:slide="{{duration: 250, easing: quintOut}}">
					<ProductInCart {product} bind:productCounter={counter} />
				</li>
			{/each}
		{/if}
	</ul>

	<div class="cart__form">
		<p class="cart__form__title">{summary.title}</p>
		{#if $addToCart.length === 0}
			<p class="">{summary.emptyCart}</p>
		{:else}
			<div class="cart__form__summary">
				<p bind:this={customerOrder}>
					{summary.fullCart}
					{#each $addToCart as item}
						<span class="highlight" transition:slide="{{duration: 250, easing: quintOut}}">
							<br />
							{counter}x
							{item.productname}

						</span>
					{/each}
					<br />
					<br />
					{summary.total}
					<br />
					<!-- TODO: Calculate Total Price -->
					<span class="highlight">CHF {sum}</span>
				</p>
			</div>
		{/if}
	</div>

	<div class="cart__form__input">
		<p class="cart__input__title">{contact.title}</p>
		<form
			name="Bestellungen"
			method="POST"
			data-netlify="true"
			data-netlify-recaptcha="true"
		>
			<label class="cart__form__field">
				<input type="text" required />
				<span class="placeholder">{contact.nameInput}</span>
			</label>
			<label class="cart__form__field">
				<input type="email" required />
				<span class="placeholder">{contact.mailInput}</span>
			</label>
			<label class="cart__form__field">
				<input type="text" required />
				<span class="placeholder">{contact.adressInput}</span>
			</label>
			<button class="button__submit" type="submit"
				>{contact.button}</button
			>
			<div data-netlify-recaptcha="true" />
		</form>
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
