<script>
	import { onMount } from "svelte";
	import { cart } from "$lib/util/cart";
	import { fade, fly, slide, blur, scale } from "svelte/transition";
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing';
	import messages from "$lib/util/messages";
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";

	const { product } = messages.shop;
	const { summary } = messages.shop;
	const { contact } = messages.shop;

	console.log($cart);

	// TODO: copy order to clipboard / form
	let customerOrder;

	$: total = $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

	const checkOut = () => {
		console.log((JSON.stringify($cart)))
	}
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
			<p class="">{summary.emptyCart}</p>
		{:else}
			<div class="Cart__summary--list">
				<div bind:this={customerOrder}>
					{summary.fullCart}
					{#each $cart as item}
					<div class="Cart__summary--item" transition:slide="{{duration: 250, easing: quintOut}}">
						<span class=" Cart__summary--highlight item--details" >
							{#key item.quantity}
								<span in:scale="{{duration: 1000}}">{item.quantity}x</span>
							{/key}
							{item.productname}
						</span>
						<span class="Cart__summary--highlight item--price">
							CHF {item.quantity * item.price}
						</span>
					</div>
					{/each}
					<br />
					<br />
					{summary.total}
					<br />
					<strong class="Cart__summary--highlight">CHF {total}</strong>
					<br />
					<span class="Cart__summary--billing">
						Hier steht, wie du die Rechnung bezahlen kannst und andere wichtige Infos
					</span>
				</div>
			</div>
		{/if}
	</div>

	<!-- <button on:click={checkOut}></button> -->

	<!-- KONTAKTANGABEN -->

	<div class="Cart__contact">
		<p class="Cart__contact--title">{contact.title}</p>
		<form
			name="Bestellungen"
			method="POST"
			data-netlify="true"
		>
		<input type="hidden" name="form-name" value="netlify-form-example" />
			<label class="Cart__contact--label">
				<input type="text" required />
				<span class="Cart__contact--placeholder">{contact.nameInput}</span>
			</label>
			<label class="Cart__contact--label">
				<input type="email" required />
				<span class="Cart__contact--placeholder">{contact.mailInput}</span>
			</label>
			<label class="Cart__contact--label">
				<input type="text" required />
				<span class="Cart__contact--placeholder">{contact.adressInput}</span>
			</label>
			<button class="Cart__contact--submit"
				>{contact.button}</button
			>
			<div data-netlify-recaptcha="true" />
		</form>
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
