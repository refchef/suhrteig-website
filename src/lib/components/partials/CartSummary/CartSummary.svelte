<script>
	export let item;
	// export let orderTotalItems;
</script>


<div class="Cart__summary--item">
	<span class=" Cart__summary--highlight item--details" >
		{#key item.quantity}
			<span>{item.quantity}x</span>
		{/key}
		{item.productname}
	</span>
	<span class="Cart__summary--highlight item--price">
		CHF {item.quantity * item.price}
	</span>
</div>

<style src="./CartSummary.scss"></style>
