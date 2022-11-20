<script>
    import { addToCart } from "$lib/util/cart"  
    console.log("Cart.svelte", $addToCart)
  

    let productCounter = 0;

    const upCount = () => {
      productCounter += 1;
    }
    const downCount = () => {
      productCounter -= 1;
    }

</script>

<style lang="scss" src="./Cart.scss"></style>

<section class="cart">
  <p class="cart__title">Dein Warenkorb</p>
  <ul class="cart__summary">
    {#each $addToCart as product}
      <li class="cart__item">
        <button class="cart__button" type="button" on:click={upCount}>+</button>
          <span class="cart__product__counter">
            {productCounter}
          </span>
        <button class="cart__button" type="button" on:click={downCount}>–</button>
        <span class="cart__productname">{product.productname}</span>
      </li>
    {/each}
  </ul>
 

  <form name="Bestellungen" method="POST" data-netlify="true">
      <label class="cart__title" for="summary">Zusammenfassung</label>
      <!-- <input type="hidden" id="summary" value=""> -->

      <p>Du bestellst 
      <span>
        {#each $addToCart as item}
            <br>
              {productCounter}x
              {item.productname}
        {/each}
      </span>
      für ein total von CHF 5.00</p>

      <label>Dein Name:
        <input type="text" name="name" />
      </label>
      <label>Deine E-Mail:
        <input type="email" name="email" />
      </label>
      <label>Bemerkungen:
        <input type="text" name="bemerkungen" />
      </label>
      <button type="submit">Bestellen</button>
  </form>
</section>
  