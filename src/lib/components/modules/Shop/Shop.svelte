<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";

    export let products = []
    // Store array?
    const cart = [];

    $: console.log("Shop.svelte", cart);
</script>

<ProductSlider {products} {cart}/>
<Cart {cart}/>
