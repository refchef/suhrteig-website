<script>
	import { addToCart } from "$lib/util/cart";
	import Image from "$lib/components/partials/Image/Image.svelte";
	import ProductTag from "$lib/components/partials/ProductTag/ProductTag.svelte";

	export let product;
	export let cart;
	const {
		productphoto,
		productname,
		weight,
		description,
		price,
		amount,
		tags,
		soldout,
	} = product;
	let splitTags = tags.split(",");
	let productInCart = false;

	const addProduct = () => {
		$addToCart = [...$addToCart, product];
		// $addToCart = [...$addToCart, {productname}];
		// $productPrice = [...$productPrice, {price}];
		// cart = [...cart, product];
		console.log("product added to cart", $addToCart);
		productInCart = true;
	};

	const removeProduct = () => {
		cart = cart.filter((t) => t !== product);
		// $addToCart = $addToCart.filter((el) => el.productname !== productname);
		console.log("product removed from cart", cart);
		productInCart = false;
	};
</script>

<article class="product">
	<div class="product__item--wrapper">
		<div class="product__item">
			<div class="product_photo">
				{#if !soldout}
					<Image {...productphoto} ratio={"4:5"} />
					<div class="product__button">
						<!-- AddButton.svelte -->
						{#if !productInCart}
							<button
								on:click={addProduct}
								type="submit"
								class="product__button__add"
							>
								<p class="product__button--default">+</p>
							</button>
						{:else}
							<button
								on:click={removeProduct}
								type="submit"
								class="product__button__remove"
							>
								<p class="product__button--default">–</p>
							</button>
						{/if}
					</div>
				{:else}
					<div class:--soldOut={soldout}>
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
