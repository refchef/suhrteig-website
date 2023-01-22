<script>
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";
	import News from "$lib/components/modules/News/News.svelte";

	export let products = []
	export let news;
</script>

<ProductSlider {products}/>
<News {news}/>
<Cart/>
