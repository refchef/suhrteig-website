<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";

    export let products = []
    // Store array?
    const cart = [];
    console.log("Shop.svelte", cart);
</script>

<h1>This is the shop</h1>
<ProductSlider {products} {cart}/>

<h1>This is the cart</h1>
<Cart {cart}/>
