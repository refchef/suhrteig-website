<script>
	import { addToCart } from "$lib/util/cart";
	console.log("Products in Cart", $addToCart);

	export let cart;
	console.log("Cart.svelte", cart);

	// 	const totalPrice = $productPrice.reduce((total, current) => {
	//     return total + current.price;
	//   }, 0);

	//   console.log("totalPrice", totalPrice)
	let productCounter = 0;
</script>

<section class="cart">
	<p class="cart__summary__title">Dein Warenkorb</p>
	<p class="cart__form__title">Zusammenfassung</p>
	<p class="cart__input__title">Kontaktangaben</p>

	<ul class="cart__summary">
		{#if cart.length && productCounter === 0}
			<p>ist zurzeit noch leer ...</p>
		{:else}
			<!-- {#each $addToCart as product} -->
			{#each cart as product}
				<li class="cart__item">
					<button
						class="button__cart"
						type="button"
						on:click={() => (productCounter += 1)}>+</button
					>
					<span class="cart__product__counter">
						{productCounter}
					</span>
					<button
						class="button__cart"
						type="button"
						on:click={() => (productCounter -= 1)}>–</button
					>
					<span class="cart__productname">{product.productname}</span>
				</li>
			{/each}
		{/if}
	</ul>

	<div class="cart__form">
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
							{productCounter}x
							{item.productname},
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
		<form name="Bestellungen" method="POST" data-netlify="true">
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
		</form>
	</div>
</section>

<style lang="scss" src="./Cart.scss"></style>
