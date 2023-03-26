<script>
	import { cart } from "$lib/util/cart";
	import Image from "$lib/components/partials/Image/Image.svelte";
	import ProductTag from "$lib/components/partials/ProductTag/ProductTag.svelte";
	import Plus from "$lib/assets/svg/Plus.svg"
	import Minus from "$lib/assets/svg/Minus.svg"

	export let product;

	const {
		id,
		productphoto,
		productname,
		weight,
		description,
		price,
		quantity,
		maxquantity,
		tags,
		soldout,
	} = product;

	let splitTags = tags.split(",");

	const addProduct = () => {
		product.quantity += 1;
		$cart = [...$cart, product];
		console.log("product", $cart);
	};

	const removeProduct = () => {
		product.quantity = 0;
		$cart = $cart.filter((el) => el.productname !== productname);
	};
</script>

<article class="product">
	<div class="product__item--wrapper">
		<div class="product__item">
			<div class="product_photo">
				{#if !soldout}
					{#if product.quantity === 0}
						<div style:opacity={1}>
							<Image {...productphoto} ratio={"4:5"} />
						</div>
					{:else}
						<div style:opacity={0.3}>
							<Image {...productphoto} ratio={"4:5"} />
						</div>
					{/if}
					<div class="product__button">
						{#if product.quantity > 0}
							<!-- AddButton.svelte -->
							<a href="#cart">
								<div class="cart__message">zum Warenkorb</div>
							</a>
							<button
								on:click={removeProduct}
								class="product__button__remove"
							>
								<p class="product__button--default">
									<Minus/>
								</p>
							</button>

						{:else if product.quantity === 0}
							<button
								on:click={addProduct}
								class="product__button__add"
							>
								<p class="product__button--default">
									<Plus/>
								</p>
							</button>
						{/if}
					</div>
				{:else}
					<div
						class:--soldOut={soldout}
						style:opacity={soldout ? "0.3" : "1"}
					>
						<Image {...productphoto} ratio={"4:5"} />
					</div>
					<div class="product__button">
						<button type="button" class="product__button__add">
							<p class="product__button--soldOut">sold out</p>
						</button>
					</div>
				{/if}
			</div>
			<p class="product__name">
				{productname} <span class="product__weight">{weight}g</span>
			</p>
			<p class="product__price">CHF {price}</p>
			<p class="product__description">{description}</p>
			<ProductTag tags={splitTags} />
			<!-- TODO: Set max order amount -->
			<!-- <p>max order amount { amount }</p> -->
		</div>
	</div>
</article>

<style lang="scss" src="./Product.scss"></style>
