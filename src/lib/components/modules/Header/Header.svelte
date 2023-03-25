<script>
	// import CurrentStatus from "$lib/components/partials/CurrentStatus/CurrentStatus.svelte";
	import messages from "$lib/util/messages";
	import { onMount } from "svelte";
	import News from "$lib/components/modules/News/News.svelte";


	export let title;
	export let tagline;
	export let status;
	export let news;

	const { header } = messages;


	let myText;
	let getWidth;
	let width;

	onMount(() => {
		const updateText = (e) => {
			getWidth = e.clientX / innerWidth;
			width = getWidth * (150 - 50) + 50;
			myText.style.fontVariationSettings = '"wdth"' + width;
		}
		window.addEventListener("mousemove", updateText);
	})

	$: innerWidth = 0;
	$: getWidth = 0;


</script>

<svelte:window bind:innerWidth />


<header class="Header">
	{#if news}
		<div class="Header__news">
			<News {news}/>
		</div>
	{/if}
	<div class="Header--wrapper">
		<!-- <div class="Header__tagline">
			<p>{tagline}</p>
		</div> -->
		<div class="Header__logo">
			<div class="Header__title" bind:this={myText}>{title}</div>
		</div>
		<div class="Header__status">
			{header.preStatus}
			<div class="Header__currentStatus">
				{status}
			</div>
		</div>
	</div>
</header>

<style lang="scss" src="./Header.scss"></style>
