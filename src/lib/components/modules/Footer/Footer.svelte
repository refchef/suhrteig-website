<script>
	import Logo from "$lib/assets/svg/Logo.svg"
	import Sign from "$lib/assets/svg/Sign.svg"
	import messages from "$lib/util/messages";

	const contact = Object.values(messages.footer.contact)

</script>

<section class="Footer">
	<div class="Footer__logo--wrapper">
		<!-- <div class="Footer__logo__sign">
			<Sign/>
		</div> -->
		<div class="Footer__logo">
			<div class="Logo">
				<Logo/>
			</div>
		</div>
		<div class="Footer__greetings">
			{@html messages.footer.greetings}
		</div>
	</div>
	<ul class="Footer__items">
		{#each contact as item}
			<li class="Footer__item">
				<a href="{ item.url }">{ item.title }</a>
			</li>
		{/each}
	</ul>
</section>

<style src="./Footer.scss"></style>

