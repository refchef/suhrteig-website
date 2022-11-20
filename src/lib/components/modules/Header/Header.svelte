<script>
    export let title;
    export let tagline;
    export let status;
    
</script>

<style lang="scss" src="./Header.scss"></style>

<header class="Header">
    <h1 class="Header__phrase">
        <span class="Header__title">{title}</span>
        <span class="Header__tagline">{tagline}</span>
    </h1>
    <div class="Header__status" >
        Ich bin aktuell am 
        <div class="Header__currentStatus" >
            {status}
        </div>
    </div>
</header>