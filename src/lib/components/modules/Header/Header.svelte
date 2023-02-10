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


	$: innerWidth = 0;
	let myText;
	let getWidth;
	let width;
	onMount(() => {
		const updateText = (e) => {
			getWidth = e.offsetX / innerWidth;
			width = getWidth * (150 - 65) + 65;
			myText.style.fontVariationSettings = '"wdth"' + width;
		}
		window.addEventListener("mousemove", updateText);
	})

</script>

<svelte:window bind:innerWidth />
<News {news}/>

<header class="Header">
	<div class="Header__logo">
		<div class="Header__title" bind:this={myText}>{title}</div>
	</div>
	<div class="Header--wrapper">
		<div class="Header__tagline">
			<p>{tagline}</p>
			<!-- <p>getWidth: {getWidth}</p>
			<p>innerWidth: {innerWidth}</p>
			<p>width: {width}</p> -->
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
