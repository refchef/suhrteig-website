<script>
	import News from "../News/News.svelte";

	export let intro;
    export let news;
	// import { onMount } from "svelte";

	// onMount(() => {
	// 	console.log('the component has mounted');
	// });

	// let nodes = [
	//     { type: "tel", label: "Call", link: `tel:${contacts[0]}` },
	//     { type: "mail", label: "Mail", link: `mail:${contacts[1]}` },
	//     { type: "insta", label: "Insta", link: contacts[2] }
	// ]
</script>

<div class="intro">
	<div class="intro__wrapper">
		<div class="intro__text">
			<!-- {@html intro} -->
			<!-- <div class="intro__text--small">
				Montag wird bestellt — Mittwoch wird gebacken und geliefert
			</div> -->
			<!-- <div class="intro__text--big">
				Sauerteig- und Wildhefebrot in Basel gebacken.
			</div> -->
		</div>
		<div class="intro__links">
			<ul class="intro__links__list">
				<li class="intro__links__item">
					<a href="#bestellen">Jetzt bestellen</a>
				</li>
				<li class="intro__links__item">
					<a href="#about">Über Suhrteig</a>
				</li>
				<li class="intro__links__item">
					<a href="https://buttondown.email/suhrteig"
						>Newstletter abonnieren</a
					>
				</li>
			</ul>
		</div>
	</div>
    <!-- <News {news}/> -->
</div>

<style lang="scss" src="./Intro.scss"></style>
