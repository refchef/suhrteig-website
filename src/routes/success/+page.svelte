<div class="Success">
	<div class="Success__message">
		<h1>
			💌
			<br/>
			Vielen Dank für deine Bestellung!
			<br/>
			Ich melde mich bald bei dir.
		</h1>
	</div>
	<div class="Success__cta">
		<div class="Success__cta--wrapper">
			<a class="Success__cta__button" href="/"> Zurück </a>
			<a class="Success__cta__button" href="/#about">
				Mehr über Suhrteig erfahren
			</a>
		</div>
	</div>
</div>

<style>
	.Success {
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}

	.Success__message {
		text-align: center;
		padding-bottom: 1rem;
		font-size: 4.5rem;
		line-height: 8.5rem;
		font-stretch: 75%;
		font-feature-settings: "ss01", "ss05", "ss06", "ss08", "ss09", "ss13";
	}

	.Success__cta {
		display: flex;
		flex-direction: row;
	}
	.Success__cta--wrapper {
		display: flex;
		justify-content: center;
		/* padding: 9rem 0; */
		gap: 2rem;
		flex-direction: row;
	}

	.Success__cta__button {
		text-transform: uppercase;
		background: #ff87f2;
		flex: 0 0 auto;
		text-align: center;
		width: auto;
		padding: 5rem;
		border-radius: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff9ef;
		height: 5rem;
		transition: 0.2s ease-in-out;
		font-size: 20px;
		box-shadow: 10px 10px 54px 0px rgba(0, 0, 0, 0.2);
		font-weight: 100;
		font-variation-settings: "wdth" 65;
	}
	.Success__cta__button:hover {
		background: #fff9ef;
		color: #030520;
		font-variation-settings: "wdth" 150;
	}
</style>
