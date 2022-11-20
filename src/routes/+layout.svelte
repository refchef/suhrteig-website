<script>

    import {fade} from "svelte/transition";
    import {navigating} from "$app/stores";
	
</script>

<style lang="scss" src="../../src/scss/global.scss" global></style>

<main>
	{#if $navigating}
		<!-- A loader with a slight delay, so that it only shows when loading takes more than X milliseconds -->
		<div in:fade|local={{ delay: 300, duration: 500 }}>
			<!-- <Loader/> -->
            <p>loading ...</p>
		</div>
	{/if}
	<slot/>
	<!-- <PreviewTag/> -->
</main>