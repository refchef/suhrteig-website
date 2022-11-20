<script>
    export let tags;
    console.log("ProductTags.svelte", tags)
</script>

<style lang="scss" src="./ProductTag.scss"></style>

<div class="product__tags">
    {#each tags as tag}
        <p class="product__tag">{ tag }</p>
    {/each}
</div>
