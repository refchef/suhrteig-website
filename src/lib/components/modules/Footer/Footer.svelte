<script>
	import messages from "$lib/util/messages";
	const footer = Object.values(messages.footer)


</script>

<section class="footer">
	<ul class="footer__items">
		{#each footer as item}
			<li class="footer__item">
				<a href="{ item.url }">{ item.title }</a>
			</li>
		{/each}

	</ul>
</section>

<style src="./Footer.scss"></style>

