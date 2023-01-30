<script>
	export let item;
	export let orderTotalItems;
	export let confirmOrder;
	export let finalOrder;

	$: if (confirmOrder === true) {
		finalOrder = orderTotalItems.innerText
		console.log('final order', finalOrder);
	}
</script>


<div class="Cart__summary--item" bind:this={orderTotalItems}>
	<span class=" Cart__summary--highlight item--details" >
		{#key item.quantity}
			<span>{item.quantity}x</span>
		{/key}
		{item.productname}
	</span>
	<span class="Cart__summary--highlight item--price">
		für CHF {item.quantity * item.price}
	</span>
</div>

<style src="./CartSummary.scss"></style>
