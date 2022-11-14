<script>
    import 'keen-slider/keen-slider.min.css'
	import KeenSlider from 'keen-slider';
	import Product from '$lib/components/partials/Product/Product.svelte';
    import {onMount, tick} from "svelte";

    export let products = [];
    const {fields} = products.props

	console.log("Slider", products)
	console.log("Fields", fields)
    let slider, sliderEl, hasNext = true, hasPrev = false, dragging = false;

    const showPrev = () => {
		if (slider) {
			slider.prev();
		}
	}
    const showNext = () => {
		if (slider) {
			slider.next();
		}
	}

	onMount(() => {
		if (images.length > 1) {
			slider = new KeenSlider(sliderEl, {
				slides: {
					perView: 1.45,
					origin: 0
				},
				detailsChanged: (s) => {
					const slides = s.track.details.slides;
					hasNext = s.track.details.abs < s.slides.length - 1;
					hasPrev = s.track.details.abs > 0;
					s.slides.forEach((element, idx) => {
						// console.log(s.track.details.progress)
						// element.style.setProperty('--progress', 1 - Math.abs(slides[idx].distance / s.track.details.length));
						// element.style.setProperty('--progress', s.track.details.progress);
						element.style.setProperty('--scale', slides[idx].portion > .5 ? 1 : "var(--scale-small)");
					});
				},
				dragChecked: () => {
					dragging = true;
				},
				dragEnded: () => {
					tick().then(() => dragging = false);
				}
			});

			return slider.destroy
		}
	})
</script>

<style lang="scss" src="./ProductSlider.scss"></style>

<div class="portfolio__slider">
    <div class="keen-slider" bind:this={sliderEl}>
        {#each fields as product}
            <div class="portfolio__image keen-slider__slide">
				<Product product={product}/>
                <!-- <div on:click={() => {
                    if (!dragging) {
                        slider.moveToIdx(index)
                    }
                }}>
                    <Product {...product} vw={{ default: 50, tablet: 75 }}/>
                </div> -->
            </div>
        {/each}
    </div>
</div>