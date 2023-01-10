<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";

	export let products = []
</script>

<ProductSlider {products}/>
<Cart/>
