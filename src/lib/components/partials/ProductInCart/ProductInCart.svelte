<script>
	import { cart } from "$lib/util/cart";

	export let product;

	let disabled = false;

	const countUp = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity === product.maxquantity) {
						// Do something
						console.log("reached max amount");
					}
					else {
						product.quantity += 1
						console.log(product.quantity);
						$cart = $cart;
					}
						return;
				}
			}
	}

	const countDown = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
						product.quantity -= 1
						$cart = $cart
						console.log(product.quantity);
					} else {
						$cart = $cart.filter((cartItem) => cartItem != product)
						product.quantity = 0;
					}
					return;
				}
		}
	}

</script>

<span class="cart__productname">{product.productname}</span>
<button class="button__cart" type="button" on:click={countDown(product)}>–</button>
<span class="cart__product__counter">
	{product.quantity}
</span>
<button class="button__cart" type="button" class:--disabled={disabled} on:click={countUp(product)}>+</button>

<style src="./ProductInCart.scss"></style>
