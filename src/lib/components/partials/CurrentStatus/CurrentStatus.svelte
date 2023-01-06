<script>
	import { onMount } from "svelte";
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let status;

	// let bla;
	let showStatus = false;
	onMount(() => {
		// console.log(bla);
		window.onscroll = function() {
			let scrollLimit = 200;
			if (window.scrollY >= scrollLimit) {
				showStatus = true;
			} else if (window.scrollY <= scrollLimit) {
				showStatus = false;
			}
		};
	})

</script>

{#key showStatus}
	<div
		class:showStatus={showStatus}
		class="Current__status"
		transition:fly="{{duration: 500, y: -100, opacity: 0.1, easing: quintOut}}"
		>
		Ich bin aktuell am
		<div class="status" >
			{status}
		</div>
	</div>
{/key}

<style src="./CurrentStatus.scss"></style>
