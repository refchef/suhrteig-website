<script>
	import { cart } from "$lib/util/cart";
	import Plus from "$lib/assets/svg/Plus.svg"
	import Minus from "$lib/assets/svg/Minus.svg"

	export let product;

	let disabled = false;

	const countUp = (product) => {
		for(let item of $cart) {
				if(item.id === product.id) {
					if(product.quantity === product.maxquantity) {
						// TODO: Set button to disabled when max amount is reached
						disabled = true;
					}
					else {
						disabled = false;
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

<span class="cart__productname">{product.productname} {product.productattribute}</span>
<button class="button__cart" type="button" on:click={countDown(product)}>
	<Minus/>
</button>
<span class="cart__product__counter">
	{product.quantity}
</span>
<button class="button__cart" {disabled} type="button" class:--disabled={disabled} on:click={countUp(product)}>
	<Plus/>
</button>

<style src="./ProductInCart.scss"></style>
