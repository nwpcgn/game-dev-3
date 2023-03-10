<script>
	import { _game, addcomma } from '../../lib/data'
	import Fa from 'svelte-fa'
	import {
		faCoins,
		faUser,
		faCat,
		faHatWizard
	} from '@fortawesome/free-solid-svg-icons'
</script>

<section class="flex divide-x border-primary-400 divide-primary-400">
	<div class="flex-1">
		<slot />
	</div>
	<div>
		<span class:update={$_game.money >= $_game.upcost}
			><Fa icon={faUser} fw /></span>
		<h4>{$_game.upown}</h4>
	</div>
	<div>
		<span class:update={$_game.money >= $_game.catcost && $_game.catown < 50}
			><Fa icon={faCat} fw /></span>
		<h4>{$_game.catown}</h4>
	</div>
	<div>
		<span class:update={$_game.money >= $_game.workercost && $_game.workerown < 50}
			><Fa icon={faHatWizard} fw /></span>
		<h4>{$_game.workerown}</h4>
	</div>
	<div class="text-white">
		<Fa icon={faCoins} fw />
		<h4>{addcomma($_game.money)}</h4>
	</div>
</section>

<style>
	div {
		@apply inline-flex items-center justify-center px-3 py-1 h-8;
	}
	.update {
		@apply text-white;
	}
	h4 {
		@apply font-thin text-base ml-1;
	}
</style>
