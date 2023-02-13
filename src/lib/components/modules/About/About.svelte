<script>
	import Image from "$lib/components/partials/Image/Image.svelte";

	export let about;
	export let radius;
	console.log('radius',radius.alt);
</script>

<section class="about" id="about">
	<p class="about__text">{@html about}</p>
	<div class="about__image">
		<Image {...radius} ratio={"1:1"} />
		<p class="image__caption">{radius.alt}</p>
	</div>
</section>

<style lang="scss" src="./About.scss"></style>
