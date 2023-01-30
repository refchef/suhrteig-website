<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import News from "$lib/components/modules/News/News.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";

	export let products = []
	export let news;
	export let billing;
</script>

<ProductSlider {products}/>
<News {news}/>
<Cart {billing}/>
