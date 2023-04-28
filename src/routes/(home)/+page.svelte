<script>
	/** @type {import('./$types').PageData} */
	import Header from "$lib/components/modules/Header/Header.svelte";
	import Intro from "$lib/components/modules/Intro/Intro.svelte";
	import About from "$lib/components/modules/About/About.svelte";
	import Shop from "$lib/components/modules/Shop/Shop.svelte";
	import Footer from "$lib/components/modules/Footer/Footer.svelte";
	import MobileCart from "$lib/components/partials/MobileCart/MobileCart.svelte";

	export let data;
	const homepage = data.homepage[0];

</script>

<Header title={homepage.title} news={homepage.news} status={homepage.status}/>
<Intro intro={homepage.intro} noShop={homepage._blocks[0].props.primary}/>
<Shop noShop={homepage._blocks[0].props.primary} billing={homepage.billing} products={homepage._blocks[0]} />
<MobileCart/>
<About about={homepage.about} radius={homepage.radius}/>
<Footer/>



