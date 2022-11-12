<script>

    export let links;
    const { fields } = links.props
    // console.log("Footer -->", fields);

</script>

{#each fields as link}
    <a href="{ link.link.url }">{ link.linkname }</a>
{/each}

