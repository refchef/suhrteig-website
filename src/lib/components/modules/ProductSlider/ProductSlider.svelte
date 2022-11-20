<script>
	import 'keen-slider/keen-slider.min.css'
	import KeenSlider from 'keen-slider'
	import Product from '$lib/components/partials/Product/Product.svelte';
	import { onMount } from 'svelte';

	export let products = [];
	const {fields} = products.props;
	
	let slider;
    onMount(() => {
        console.log('ProductSlider has mounted');
		slider = new KeenSlider("#my-keen-slider", {
			slides: {
				perView: 4.5,
			},
		})
    });



	

</script>
<style lang="scss" src="./ProductSlider.scss"></style>



<section class="product__slider" >
	<div id="my-keen-slider" class="keen-slider">
		{#each fields as product}
		<div class="keen-slider__slide">
			<Product product={product}/>
		</div>
		{/each}
	</div>
</section>