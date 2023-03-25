<script>
	import Logo from "$lib/assets/svg/Logo.svg"
	import Sign from "$lib/assets/svg/Sign.svg"
	import { onMount } from "svelte";

	import messages from "$lib/util/messages";

	const contact = Object.values(messages.footer.contact)

	let myFooterText;
	let getWidth;
	let width;

	onMount(() => {
		const updateText = (e) => {
			getWidth = e.clientX / innerWidth;
			width = getWidth * (150 - 50) + 50;
			myFooterText.style.fontVariationSettings = '"wdth"' + width;
		}
		window.addEventListener("mousemove", updateText);
	})

	$: innerWidth = 0;
	$: getWidth = 0;

</script>
<svelte:window bind:innerWidth />

<section class="Footer">
	<div class="Footer__logo--wrapper">
		<!-- <div class="Footer__logo__sign">
			<Sign/>
		</div> -->
		<div>
			<Logo/>
		</div>
		<div class="Footer__logo">
			<div class="Logo" bind:this={myFooterText}>
				Suhrteig
			</div>
		</div>
		<div class="Footer__greetings">
			{@html messages.footer.greetings}
		</div>
	</div>
	<ul class="Footer__items">
		{#each contact as item}
			<li class="Footer__item">
				<a href="{ item.url }">{ item.title }</a>
			</li>
		{/each}
	</ul>
</section>

<style src="./Footer.scss"></style>

