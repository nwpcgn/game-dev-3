<script>
	import svelteLogo from '../assets/svelte.svg'
	import { Page, Section, H4 } from '../lib'
	import { Toasts } from '../lib/toast'
</script>

<Toasts />

<Page>
	<Section>
		<header>
			<div class="flex">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" class="logo" alt="Vite Logo" />
				</a>
				<a href="https://svelte.dev" target="_blank" rel="noreferrer">
					<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
				</a>
			</div>
		</header>
	</Section>
	<hr />
	<Section>
		<div class="card">
			<H4>Startseite</H4>
		
		</div>
	</Section>
</Page>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
