<script>
	import { Toasts } from 'svoast'
	import { TopBar, Page, Section } from './lib'
	import { Route, router } from 'tinro'
	import Game from './routes/Game.svelte'
	router.mode.hash()
	const nav = [
		['/', 'Start'],
		['/game', 'Game'],
		['/game/shop', 'Shop'],
		['/game/settings', 'Settings'],
		['/toast', 'Toast']
	]
</script>

<Toasts />

<TopBar class="px-2">
	<a href="/" slot="start"> <h2>NWP-GAME</h2></a>
	<nav slot="end">
		{#each nav as [path, name], i}
			<a href={path} class:active={$router.path === path}>{name}</a>
		{/each}
	</nav>
</TopBar>

<main>
	<Route path="/">
		<Page>
			<Section>
				<header class="nwp-prose">
					<h1>This is the main page</h1>
				</header>
			</Section>
		</Page>
	</Route>
	<Route path="/game/*">
		<!-- 		<nav>
					{#each nav as [path, name], i}
						{#if path.includes('game')}
							<a href={path}>{name}</a>
						{/if}
					{/each}
				</nav> -->
	
			<Game {nav} />
	
	</Route>
	<Route path="/toast">
		<Page>
			<Section hero>
				<h1>Game Toast</h1>
			</Section>
		</Page>
	</Route>
	<Route fallback>
		<Page>
			<Section hero>
				<h1>Not Found</h1>
			</Section>
		</Page>
	</Route>
</main>

<style>
	main {
		flex: 1;
		position: relative;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
	}
	a {
		@apply py-1 px-2;
	}
	a.active {
		@apply text-gray-300;
	}
</style>
