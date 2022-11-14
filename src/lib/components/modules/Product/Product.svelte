<script>
  
    export let products;
    const { fields } = products.props
    console.log("Products -->", fields)
    const { soldout } = fields
    // console.log("soldOut -->", soldout)

    let title = "Bestellen"

</script>

<style lang="scss" src="./Product.scss"></style>

<section class="product">

    
    <h1>{title}</h1>
    
    <div class="product__item">

        {#each fields as product}
            <h3 class="product__name">{ product.productname }</h3>
            <p class="product__weight">{ product.weight }g</p>
            <p class="product__description">{ product.description }</p>
            <p class="product__tag">{ product.tags }</p>
            <p class="product__price">CHF { product.price }</p>
            <p>max order amount { product.amount }</p>
            <img src="{product.productphoto.url}" alt="">
            <!-- add Product to Cart.svelte -->
            <button class="addProduct">
                +
            </button>
                {#if product.soldout}
                <p>sold out</p>
                {/if}
        {/each}
    </div>

</section>