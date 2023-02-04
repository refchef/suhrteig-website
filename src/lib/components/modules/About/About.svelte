<script>
	import Image from "$lib/components/partials/Image/Image.svelte";

	export let about;
	export let radius;

</script>

<style lang="scss" src="./About.scss"></style>

<section class="about" id="about">
	<div class="about__wrapper">
		<p class="about__text">{@html about}</p>
		<div class="about__image">
			<Image {...radius} ratio={"4:5"}/>
			<small>{radius.alt}</small>
		</div>
	</div>

</section>
