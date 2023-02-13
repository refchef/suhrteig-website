<script>
	import Logo from "$lib/assets/svg/Logo.svg"
	import messages from "$lib/util/messages"

	const { header } = messages;
	export let intro;
	console.log('intro',intro);

</script>

<div class="Intro">
	<div class="Intro__wrapper">
		<div class="Intro__description">
			Trying Notion submissions
			{@html intro}
		</div>
		<div class="Intro__cta">
			<div class="Intro__cta--wrapper">
				<a class="Intro__cta__button first" href="{header.orderButton.target}">
					{header.orderButton.title}
				</a>
				<a class="Intro__cta__button" href="{header.aboutButton.target}">
					{header.aboutButton.title}
				</a>
				<a class="Intro__cta__button" target="blank" href="{header.newsletterButton.target}">
					{header.newsletterButton.title}
				</a>
			</div>
		</div>
		<!-- <div class="Intro__logo">
			<div class="Intro__logo--wrapper">
				<div class="Logo">
					<Logo/>
				</div>
				<div class="Intro__cta">
					<a class="Intro__cta__button" href="{header.orderButton.target}">
						{header.orderButton.title}
					</a>
				</div>
			</div>
		</div>
		<div class="Intro__links">
			<a class="Intro__links--item" href="{header.aboutButton.target}">
				{header.aboutButton.title}
			</a>
			<a class="Intro__links--item" href="{header.newsletterButton.target}">
				{header.newsletterButton.title}
			</a>
		</div> -->
	</div>

</div>

<style lang="scss" src="./Intro.scss"></style>
