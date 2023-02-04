<script>
	// import CurrentStatus from "$lib/components/partials/CurrentStatus/CurrentStatus.svelte";
	import messages from "$lib/util/messages";
	import { onMount } from "svelte";

	export let title;
	export let tagline;
	export let status;

	const { header } = messages;


	let myText;
	let getWidth;
	let width;

	onMount(() => {

		const updateText = (e) => {
			getWidth = e.offsetX / window.innerWidth;
			width = getWidth * (150 - 50) + 50;
			myText.style.fontVariationSettings = '"wdth"' + width;
			console.log(getWidth, width, myText.style.fontVariationSettings);
		}
		window.addEventListener("mousemove", updateText);

	})

</script>

<header class="Header">
	<div class="Header__logo">
		<div class="Header__title" bind:this={myText}>{title}</div>
	</div>
	<div class="Header--wrapper">
		<div class="Header__tagline">
			<p>{tagline}</p>
		</div>
		<div class="Header__status">
			{header.preStatus}
			<div class="Header__currentStatus">
				{status}
			</div>
		</div>
		<!-- <span class="onScrollStatus">
			<CurrentStatus {status}/>
		</span> -->
	</div>
</header>

<style lang="scss" src="./Header.scss"></style>
