<script>
	import { fly } from "svelte/transition";

	export let news = null;
	export let reverse = false;
	export let gap = null; // 1
	export let duration = null; // 20
</script>

<style lang="scss" src="./News.scss"></style>

{#if news}
	<div class="News"
		class:News--reverse={reverse}
		style={ gap ?
				`--gap: ${gap}em` :
				duration ?
				`--duration: ${duration}s` :
				null }
		 transition:fly={{ x: -50 }}
	>
		<div class="News__group">
			<span>{@html news}</span>
			<span aria-hidden="true">{@html news}</span>
			<span aria-hidden="true">{@html news}</span>
		</div>
		<div aria-hidden="true" class="news__group">
			<span>{@html news}</span>
			<span>{@html news}</span>
			<span>{@html news}</span>
		</div>
	</div>
{/if}

