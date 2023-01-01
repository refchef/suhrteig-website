<script>
	export let product;

	export let productCounter = 1;
	let disabled = false;

	const countUp = () => {
		if (productCounter < product.amount) {
			productCounter += 1
			disabled = false;
		} else if (productCounter === product.amount){
			disabled = true;
		}
	}

	const countDown = () => {
		if (productCounter > 1) {
			productCounter -= 1
		}
	}
</script>

<button class="button__cart" type="button" class:--disabled={disabled} on:click={countUp}>+</button>
<span class="cart__product__counter">
	{productCounter}
</span>
<button class="button__cart" type="button" on:click={countDown}>–</button>
<span class="cart__productname">{product.productname} {product.amount}</span>

<style src="./ProductInCart.scss"></style>
