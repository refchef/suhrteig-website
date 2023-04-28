<script>
	import messages from "$lib/util/messages";

	const { message, home, about, instagram, newsletter } = messages.success;
</script>

<div class="Success">
	<div class="Success__message">
		<h1>
			{message.icon}<br/>{message.title}
		</h1>
	</div>
	<div class="Success__cta">
		<div class="Success__cta--wrapper">
			<a class="Success__cta__button" class:--isPrimary={newsletter.isPrimary} target="_blank" href={newsletter.url}>{newsletter.title}</a>
			<a class="Success__cta__button" class:--isPrimary={instagram.isPrimary} target="_blank" href={instagram.url}>{instagram.title}</a>
			<a class="Success__cta__button" class:--isPrimary={about.isPrimary} href={about.url}>{about.title}</a>
			<a class="Success__cta__button" class:--isPrimary={home.isPrimary} href={home.url}>{home.title}</a>
		</div>
	</div>
</div>


<style src="./SuccessMessage.scss"></style>
