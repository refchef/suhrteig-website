<script>
	import "keen-slider/keen-slider.min.css";
	import KeenSlider from "keen-slider";
	import Product from "$lib/components/partials/Product/Product.svelte";
	import { onMount } from "svelte";

	export let products = [];
	export let cart;
	const { fields } = products.props;

	let slider;
	onMount(() => {
		slider = new KeenSlider(slider, {
			slides: {
				perView: 4.5,
			},
		});
	});
</script>

<section class="product__slider">
	<div bind:this={slider} class="keen-slider">
		{#each fields as product}
			<div class="keen-slider__slide">
				<Product {cart} {product} />
			</div>
		{/each}
	</div>
</section>

<style lang="scss" src="./ProductSlider.scss"></style>
