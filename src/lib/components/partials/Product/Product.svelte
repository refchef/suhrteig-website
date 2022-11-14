<script>

    import Image from "../Image/Image.svelte";

    export let product;
    const {productphoto, productname, weight, description, price, amount, tags, soldout} = product
    // console.log("Product Single -->", product)
    // TODO: Split tags into comma
    let splitTags = tags.split(",")
    console.log("Tags -->", splitTags)


</script>

<style lang="scss" src="./Product.scss"></style>

<section class="product">    
    <div class="product__item--wrapper">
        <div class="product__item">
            <Image {...productphoto}/>
            <h3 class="product__name">{ productname }</h3>
            <p class="product__weight">{ weight }g</p>
            <p class="product__description">{ description }</p>
                {#each splitTags as tag}
                    <p class="product__tag">{ tag }</p>
                {/each}
            <p class="product__price">CHF { price }</p>
            <p>max order amount { amount }</p>

            <button class="addProduct">
                +
            </button>
                {#if soldout}
                    <p>sold out</p>
                {/if}
        </div>
    </div>

</section>