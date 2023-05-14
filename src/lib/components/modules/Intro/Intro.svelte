<script>
	/** @type {import('./$types').PageData} */

	// import { draggableAction } from "svelte-legos"
	import Logo from "$lib/assets/svg/Logo.svg"
	import messages from "$lib/util/messages"
	import gif from "$lib/assets/gifs/suhrteig-brezel.gif"
	import { onMount } from "svelte";

	onMount(() => {

	})

	export let intro;
	export let noShop;
	const { nosales } = noShop;
	const { header } = messages;

</script>

<div class="Intro">
	<div class="Intro__wrapper">
		<div class="Intro__description">
			{@html intro}
		</div>
		<!-- <img class="gif" src="{gif}" alt="rotating brezel"> -->
		<div class="Intro__cta">
			<div class="Intro__cta--wrapper">
				{#if !nosales}
					<a class="Intro__cta__button first" href="{header.orderButton.target}">
						{header.orderButton.title}
					</a>
				{/if}
				<a class="Intro__cta__button" href="{header.aboutButton.target}">
					{header.aboutButton.title}
				</a>
				<a class="Intro__cta__button" target="blank" href="{header.newsletterButton.target}">
					{header.newsletterButton.title}
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss" src="./Intro.scss"></style>
