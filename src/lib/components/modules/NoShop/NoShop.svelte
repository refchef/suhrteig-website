<script>
	import News from "$lib/components/modules/News/News.svelte";
	export let message;
</script>

{#if message}
	<News news={message} duration={30}/>
		<div class="noShop">
			<div class="message">
				{@html message}
			</div>
		</div>
	<News news={message} duration={30}/>
{/if}


<style src="./NoShop.scss"></style>
