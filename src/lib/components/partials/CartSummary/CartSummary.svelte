<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let item;

</script>


<div class="Cart__summary--item">
	<span class="Cart__summary--highlight item--details">
		{#key item.quantity}
			<span class="item--amount" style="display: inline-block" in:scale={{ duration: 1000, easing: quintOut}}>
				{item.quantity}x
			</span>
		{/key}
		{item.productname} {item.productattribute}
	</span>
	<span class="Cart__summary--highlight item--price">
		CHF {(item.quantity * item.price).toFixed(2)}
	</span>
</div>

<style src="./CartSummary.scss"></style>
