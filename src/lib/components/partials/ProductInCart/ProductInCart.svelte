<script>
	import { addToCart, productInCart } from "$lib/util/cart";

	export let product;
	console.log(product);

	let disabled = false;

	const countUp = (product) => {
		for(let item of $addToCart) {
				if(item.id === product.id) {
					if(product.quantity === product.maxquantity) {
						console.log("reached max amount");
					}
					else {
						product.quantity += 1
						console.log(product.quantity);
						$addToCart = $addToCart;
					}
						return;
				}
			}
	}

	const countDown = (product) => {
		for(let item of $addToCart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
						product.quantity -= 1
						$addToCart = $addToCart
					} else {
						$addToCart = $addToCart.filter((cartItem) => cartItem != product)
						$productInCart = false;
					}
					return;
				}
		}
	}

</script>

<button class="button__cart" type="button" class:--disabled={disabled} on:click={countUp(product)}>+</button>
<span class="cart__product__counter">
	{product.quantity}
</span>
<button class="button__cart" type="button" on:click={countDown(product)}>–</button>
<span class="cart__productname">{product.productname}</span>

<style src="./ProductInCart.scss"></style>
