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

	console.log($addToCart);

	// TODO: copy order to clipboard / form
	let customerOrder;

	// THIS WORKS!
	$: total = $addToCart.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const checkOut = () => {
		console.log((JSON.stringify($addToCart)))
	}
</script>

<section class="cart">
	<ul class="cart__summary">
		<p class="cart__summary__title">{cart.title}</p>
		{#if $addToCart?.length === 0}
			<div>{cart.description}</div>
		{:else}
			{#each $addToCart as product}
				<li class="cart__item" transition:slide="{{duration: 250, easing: quintOut}}">
					<ProductInCart {product} />
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
							{item.quantity}x
							{item.productname} à CHF {item.quantity * item.price}

						</span>
					{/each}
					<br />
					<br />
					{summary.total}
					<br />
					<span class="highlight">CHF {total}</span>
				</p>
			</div>
		{/if}
	</div>

	<button on:click={checkOut}></button>

	<form name="netlify-form-example" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<input type="hidden" name="form-name" value="netlify-form-example" />
		<label for="name">Name</label>
		<input name="name" id="name" required placeholder="Name" type="text" />
		<label for="email">Email</label>
		<input name="email" id="email" required placeholder="Email" type="email" />
		<label for="message">Message</label>
		<input name="message" id="message" required placeholder="Message" type="text" />
		<input type="submit" value="Submit" />
	</form>

	<div class="cart__form__input">
		<p class="cart__input__title">{contact.title}</p>
		<!-- <form
			name="Bestellungen"
			method="POST"
			data-netlify="true"
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
			<button class="button__submit"
				>{contact.button}</button
			>
			<div data-netlify-recaptcha="true" />
		</form> -->
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
