<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";
	import NoShop from "$lib/components/modules/NoShop/NoShop.svelte";

	export let noShop;
	const { nosales, message } = noShop

	export let products = []
	export let billing;
	export let delivery;
</script>

{#if !nosales}
	<ProductSlider {products}/>
	<Cart {billing} {delivery}/>
{:else}
	<NoShop {message}/>
{/if}


<style src="./Shop.scss"></style>
