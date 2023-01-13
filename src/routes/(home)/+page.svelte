<script>
	/** @type {import('./$types').PageData} */
	import Header from "$lib/components/modules/Header/Header.svelte";
	import Intro from "$lib/components/modules/Intro/Intro.svelte";
	import News from "$lib/components/modules/News/News.svelte";
	import Product from "$lib/components/partials/Product/Product.svelte";
	import ProductSlider from "$lib/components/modules/ProductSlider/ProductSlider.svelte"
	import Cart from "$lib/components/modules/Cart/Cart.svelte";
	import About from "$lib/components/modules/About/About.svelte";
	import Shop from "$lib/components/modules/Shop/Shop.svelte";
	import Footer from "$lib/components/modules/Footer/Footer.svelte";

	// export const prerender = true;

	export let data;
	const homepage = data.homepage[0];

</script>


	<!-- Header.svelte -->
	<Header title={homepage.title} tagline={homepage.tagline} status={homepage.status}/>



	<!-- Intro.svelte -->
	<Intro intro={homepage.intro} news={homepage.news}/>

	<!-- News.svelte -->
	<News news={homepage.news}/>

	<!-- ProductSlider.svelte -->
	<!-- <ProductSlider products={homepage._blocks[0]} /> -->

	<Shop products={homepage._blocks[0]} />
	<!--
		Shop.svelte
			- ProductSlider
				- Product
				- ProductTag
			- Cart
	 -->
	<!-- Cart.svelte -->
	<!-- <Cart/> -->

	<!-- About.svelte -->
	<About about={homepage.about}/>

	<!-- Footer.svelte -->
	<Footer/>



