<script>
	import CurrentStatus from "$lib/components/partials/CurrentStatus/CurrentStatus.svelte";


    export let title;
    export let tagline;
    export let status;


</script>

<style lang="scss" src="./Header.scss"></style>

<header class="Header">
    <div class="Header__phrase">
        <span class="Header__title">{title}</span>
        <span class="Header__tagline">{tagline}</span>
    </div>
    <div class="Header__status" >
        Ich bin aktuell am
        <div class="Header__currentStatus" >
            {status}
        </div>
    </div>
	<span class="onScrollStatus">
		<CurrentStatus {status}/>
	</span>
</header>
