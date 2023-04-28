<script>
	import Image from "$lib/components/partials/Image/Image.svelte";

	export let about;
	export let radius;

</script>

<section class="about" id="about">
	<p class="about__text">{@html about}</p>
	<div class="about__image" id="lieferradius">
		<Image {...radius} ratio={"1:1"} />
		<p class="image__caption">{radius.alt}</p>
		<!-- <p class="image__caption">
			<span class="caption__lieferung">Lieferung</span>
			<span class="caption__pickup">Pick Up</span>
		</p> -->
	</div>
</section>

<style lang="scss" src="./About.scss"></style>
