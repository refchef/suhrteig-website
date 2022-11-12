<script>
	import Product from "$lib/components/modules/Product/Product.svelte";
	import Footer from "$lib/components/modules/Footer/Footer.svelte";
	
	export let data;
		
	const homepage = data.homepage[0];
	console.log("homepage -->", homepage);
</script>
<main>

	<!-- Header.svelte -->
	<h1>{homepage.title} { homepage.tagline }</h1>
	<h2>Ich bin aktuell am {homepage.status}</h2>
	
	<!-- Intro.svelte -->
	<p>{@html homepage.intro}</p>


	<!-- Products.svelte -->
	<Product products={homepage._blocks[0]}/>
	
	<!-- Basket.svelte -->

	<!-- About.svelte -->
	<p>About Suhrteig: {@html homepage.about}</p>

	<!-- Footer.svelte -->
	<Footer links={homepage._blocks[1]}/>
</main>


