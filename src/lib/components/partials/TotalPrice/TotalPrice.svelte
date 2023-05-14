<script>
	export let totalMessage;
	export let total;
</script>

<div class="Cart__summary--highlight" >
	{totalMessage}<span class="price">CHF {total.toFixed(2)}</span>
</div>

<style src="./TotalPrice.scss"></style>
