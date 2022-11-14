<script>
	import Product from "$lib/components/modules/Product/Product.svelte";
	import Footer from "$lib/components/modules/Footer/Footer.svelte";
	import Cart from "$lib/components/modules/Cart/Cart.svelte";
	import About from "$lib/components/modules/About/About.svelte";
	import Intro from "$lib/components/modules/Intro/Intro.svelte";
	import Header from "$lib/components/modules/Header/Header.svelte";
	
	export let data;
		
	const homepage = data.homepage[0];
	console.log("homepage -->", homepage);
</script>


	<!-- Header.svelte -->
	<Header title={homepage.title} tagline={homepage.tagline} status={homepage.status}/>
	
	
	<!-- Intro.svelte -->
	<Intro intro={homepage.intro}/>
	
	<!-- News.svelte -->

	<!-- Products.svelte -->
	<div id="bestellen">
		<Product products={homepage._blocks[0]}/>
	</div>
	
	<!-- Cart.svelte -->
	<Cart/>

	<!-- About.svelte -->
	<p id="about">About Suhrteig: {@html homepage.about}</p>
	<About/>

	<!-- Footer.svelte -->
	<Footer links={homepage._blocks[1]}/>



