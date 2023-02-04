<script>
	import "keen-slider/keen-slider.min.css";
	import KeenSlider from "keen-slider";
	import Product from "$lib/components/partials/Product/Product.svelte";
	import { breakpoints as bps } from "$lib/util/media";
	import { onMount } from "svelte";

	export let products = [];

	const { fields } = products.props;

	let slider;
	onMount(() => {
		const breakpoints = {};
		breakpoints[bps.mobile] = {
			slides: {
				perView: 1.15,
			}
		}
		slider = new KeenSlider(slider, {
			slides: {
				perView: 4.5,
			},
			breakpoints,
		});
	});
</script>

<section class="product__slider" id="bestellen">
	<div bind:this={slider} class="keen-slider">
		{#each fields as product}
			<div class="keen-slider__slide">
				<Product {product} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss" src="./ProductSlider.scss"></style>
