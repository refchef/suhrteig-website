<script>
	import { cart } from "$lib/util/cart";
	import Bag from "$lib/assets/svg/Bag.svg";

	let showMobileCart = false;

	$: if ($cart.length >= 1) {
		showMobileCart = true;
	} else if ($cart.length === 0) {
		showMobileCart = false;
	}

</script>

<article class="MobileCart">
	<div class="MobileCart__floating" class:--show={showMobileCart}>
		<a href="#cart">
			<span class="MobileCart--counter">{$cart.length}</span>
			<Bag />
		</a>
	</div>
</article>

<style src="./MobileCart.scss"></style>
