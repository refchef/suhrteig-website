<script>
  
    export let products;
    const { fields } = products.props
    // console.log("Products -->", fields)

    let title = "Bestellen"

</script>

<section>

    
    <h1>{title}</h1>
    
    {#each fields as product}
        <h3>{ product.productname }</h3>
        <p>{ product.weight }g</p>
        <p>{ product.description }</p>
        <p>{ product.tags }</p>
        <p>CHF { product.price }</p>
        <p>max order amount { product.amount }</p>
    {/each}

</section>