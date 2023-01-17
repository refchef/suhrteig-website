<script>
	import { onMount } from "svelte";
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let status;

	let showStatus = false;
	onMount(() => {
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
		<div class="status" >
			Ich bin aktuell am {status}
		</div>
	</div>
{/key}

<style src="./CurrentStatus.scss"></style>
