<script>
	import { addToCart } from "$lib/util/cart";
	import ProductInCart from "$lib/components/partials/ProductInCart/ProductInCart.svelte";
	console.log("Products in Cart", $addToCart);

	// export let cart;
	console.log("Cart.svelte", $addToCart);

	// 	const totalPrice = $productPrice.reduce((total, current) => {
	//     return total + current.price;
	//   }, 0);

	//   console.log("totalPrice", totalPrice)
	let counter;
	$: console.log("Cart counter", counter);
	// const countUp = () => {
	// 	if (productCounter < 5) {
	// 		productCounter += 1
	// 	}
	// }

</script>

<section class="cart">

	<ul class="cart__summary">
		<p class="cart__summary__title">Dein Warenkorb</p>
		{#if $addToCart?.length === 0}
			<p>ist zurzeit noch leer ...</p>
		{:else}
			{#each $addToCart as product}
				<li class="cart__item">
					<ProductInCart {product} bind:productCounter={counter}/>
				</li>
			{/each}
		{/if}
	</ul>

	<div class="cart__form">
		<p class="cart__form__title">Zusammenfassung</p>
		{#if $addToCart.length === 0}
			<p class="">
				Sobald du köstliches Brot im Warenkorb hast, siehst du hier eine
				Zusammenfassung.
			</p>
		{:else}
			<div class="cart__form__summary">
				<p>
					Du bestellst
					{#each $addToCart as item}
						<span class="highlight">
							<br />
							{counter}x
							{item.productname}
						</span>
					{/each}
				</p>
				Total
				<br />
				<span class="highlight">CHF 0</span>
			</div>
		{/if}
	</div>

	<div class="cart__form__input">
		<p class="cart__input__title">Kontaktangaben</p>
		<form name="Bestellungen" method="POST" data-netlify="true" data-netlify-recaptcha="true">
			<label class="cart__form__field">
				<input type="text" required />
				<span class="placeholder">Dein Name</span>
			</label>
			<label class="cart__form__field">
				<input type="email" required />
				<span class="placeholder">Deine E-Mail</span>
			</label>
			<label class="cart__form__field">
				<input type="text" required />
				<span class="placeholder">Adresse für Lieferung</span>
			</label>
			<button class="button__submit" type="submit"
				>Bestellung abschicken</button
			>
			<div data-netlify-recaptcha="true"></div>
		</form>
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
