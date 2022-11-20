<script>
    import { addToCart } from "$lib/util/cart"
    import Image from "$lib/components/partials/Image/Image.svelte";
    import ProductTag from "$lib/components/partials/ProductTag/ProductTag.svelte";


    export let product;
    // console.log("Product Single -->", product)
    const {productphoto, productname, weight, description, price, amount, tags, soldout} = product
    let splitTags = tags.split(",")
    
    const addProduct = () => {
		$addToCart = [...$addToCart, {
			productname
		}];
        console.log($addToCart)
	};
    

</script>

<style lang="scss" src="./Product.scss"></style>

<article class="product">    
    <div class="product__item--wrapper">
        <div class="product__item">
            <div class="product_photo">
                {#if !soldout}
                    <Image {...productphoto} ratio={"4:5"}/>
                        <div class="product__button" >
                            <!-- AddButton.svelte -->
                            <button on:click={addProduct} type="submit" class="product__button__add">
                                <p class="product__button--default">
                                    +
                                </p>
                            </button>
                        </div>
                {:else}
                    <div class:--soldOut={soldout}>
                        <Image {...productphoto} ratio={"4:5"}/>
                    </div>
                    <div class="product__button">
                        <button type="button" class="product__button__add">
                            <p class="product__button--soldOut">
                                    sold out
                            </p>
                        </button>
                    </div>
                {/if}
            </div>
            <p class="product__name">{ productname } <span class="product__weight">{ weight }g</span></p>
            <p class="product__price">CHF { price }.–</p>
            <p class="product__description">{ description }</p>
            <!-- ProductTag.svelte -->
            <ProductTag tags={splitTags}/>
                
            <!-- <p>max order amount { amount }</p> -->

        </div>
    </div>

</article>