<script>
	export let tags;
</script>

<div class="product__tags">
	{#each tags as tag}
		<div class="product__tag">{tag}</div>
	{/each}
</div>

<style lang="scss" src="./ProductTag.scss"></style>
