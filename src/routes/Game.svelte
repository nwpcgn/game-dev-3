<script>
	import { Route, router } from 'tinro'
	router.mode.hash()
	import Fa from 'svelte-fa'
	import {
		faCog,
		faShoppingCart,
		faAngleLeft,
		faGamepad
	} from '@fortawesome/free-solid-svg-icons'
	import { Section, Button, H3, H4, H5 } from '../lib'
	import UpgradeBar from './game/UpgradeBar.svelte'
	import StatBar from './game/StatBar.svelte'
	import MainBar from './game/MainBar.svelte'
	import Trigger from './game/Trigger.svelte'
	import { _game, resetValues } from '../lib/data'
	import { onInterval } from './game/utils'
	$: ({
		money,
		moneyup,
		msec,
		upcost,
		catcost,
		workercost,
		upown,
		catown,
		workerown,
		catadd,
		workadd,
		cboost,
		wboost,
		catmax,
		workmax
	} = $_game)
	const resetStore = () => {
		_game.set(resetValues)
	}
	const updateStore = () => {
		_game.set({
			money,
			moneyup,
			msec,
			upcost,
			catcost,
			workercost,
			upown,
			catown,
			workerown,
			catadd,
			workadd,
			cboost,
			wboost,
			catmax,
			workmax
		})
	}
	const clicked = () => {
		money += moneyup
	}
	const upgrade = (name) => {
		if (name === 'kitten') {
			if (money >= catcost && catown < 50) {
				if (catown <= 13) {
					msec += catadd
					catadd++
					cboost = 1
				} else if (catown == 14) {
					msec += catadd
					catadd++
					cboost = 200
				} else if (catown <= 23) {
					msec += 200 * catadd
					catadd++
					cboost = 200
				} else if (catown == 24) {
					msec += 200 * catadd
					catadd++
					cboost = 5000
				} else if (catown <= 48) {
					msec += 5000 * catadd
					catadd++
					cboost = 5000
				} else if (catown == 49) {
					msec += 5000 * catadd
					catadd++
					cboost = 15000
				} else {
					msec += 15000 * catadd
					catadd++
					cboost = 15000
				}
				catown += 1
				money -= catcost
				catcost = catcost * 2
			}
		}
		if (name === 'worker') {
			if (money >= workercost && workerown < 50) {
				if (workerown <= 13) {
					msec += workadd
					workadd++
					wboost = 1
				} else if (workerown == 14) {
					msec += workadd
					workadd++
					wboost = 200
				} else if (workerown <= 23) {
					msec += 200 * workadd
					workadd++
					wboost = 200
				} else if (workerown == 24) {
					msec += 200 * workadd
					workadd++
					wboost = 5000
				} else if (workerown <= 48) {
					msec += 5000 * workadd
					workadd++
					wboost = 5000
				} else if (workerown == 49) {
					msec += 5000 * workadd
					workadd++
					wboost = 15000
				} else {
					msec += 15000 * workadd
					workadd++
					wboost = 15000
				}
				workerown += 1
				money -= workercost
				workercost = workercost * 3
			}
		}

		if (name === 'upgrade') {
			if (money >= upcost) {
				moneyup += upcost / 15
				money -= upcost
				upown += 1
				upcost = upcost * 5
				if (catown == 50) {
					msec -= catmax
					catmax = Math.floor(moneyup * 0.15)
					msec += catmax
				}
				if (workerown == 50) {
					msec -= workmax
					workmax = Math.floor(moneyup * 0.35)
					msec += workmax
				}
			}
		}
	}
	const myTimer = () => {
		money += msec
	}

	let active = false
	const onKeyDown = (e) => {
		if (e.keyCode == 32) {
			active = true
			clicked()
		}
	}
	const onKeyUp = (e) => {
		if (e.keyCode == 32) {
			active = false
		}
	}

	onInterval(myTimer, 1000)
	$: updateStore(money)
	$: updates = money >= upcost || money >= catcost || money >= workercost
</script>

<header
	class="sticky inset-x-0 top-0 z-30 bg-primary-500 text-primary-200 flex flex-col shadow divide-y">
	<span class="flex items-center justify-between px-2">
		<H5 class="font-semibold">Game-Area</H5>
		<div class="flex space-x-3 py-2">
			<button
				class="button"
				class:current={$router.path === '/'}
				on:click={() => router.goto('/')}
				aria-label="Start">
				<Fa icon={faGamepad} fw size="lg" />
			</button>
			<button
				class="button"
				class:updates
				class:current={$router.path === '/shop'}
				on:click={() => router.goto('/shop')}
				aria-label="Shop">
				<Fa icon={faShoppingCart} fw size="lg" />
			</button>
			<button
				class="button"
				class:current={$router.path === '/settings'}
				on:click={() => router.goto('/settings')}
				aria-label="Settings">
				<Fa icon={faCog} fw size="lg" />
			</button>
		</div>
	</span>
	<StatBar />
</header>

<main>
	<Route path="/">
		<div class="flex-1 flex flex-col justify-between px-4">
			<MainBar />
			<Trigger on:click={clicked} bind:active />
		</div>
	</Route>
	<Route path="/shop">
		<Section>
			<nav class="flex items-center">
				<button on:click={() => history.back()}>
					<Fa icon={faAngleLeft} fw size="2x" />
				</button>
				<H3>Game Shop</H3>
			</nav>
			<hr />
			<article class="py-4 px-2 space-y-2">
				<UpgradeBar on:upgrade={(e) => upgrade(e.detail)} />
			</article>
		</Section>
	</Route>
	<Route path="/settings">
		<Section>
			<nav class="flex items-center">
				<button on:click={() => history.back()}>
					<Fa icon={faAngleLeft} fw size="2x" />
				</button>
				<H3>Game Settings</H3>
			</nav>
			<hr />
			<article class="py-4 px-2 space-y-2">
				<H4>Reset Game</H4>
				<p>
					<Button blue on:click={resetStore}>Reset</Button>
				</p>
			</article>
		</Section>
	</Route>
</main>

<svelte:window
	on:keyup|preventDefault={onKeyUp}
	on:keydown|preventDefault={onKeyDown} />

<style>
	main {
		display: grid;
		grid-template-rows: 1;
		grid-template-columns: 1;
	}

	main > :global(*) {
		grid-row: 1;
		grid-column: 1;
	}
	.button {
		@apply text-primary-200;
	}
	.button.updates {
		@apply text-rose-700;
	}
	.button.current {
		@apply text-gray-50;
	}
</style>
