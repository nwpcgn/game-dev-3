<script>
	export let sm = false
	export let xs = false
	export let hero = false
	export let prose = false
</script>

<section class:nwp-prose={prose} class:hero {...$$restProps}>
	<div class:sm class:xs>
		<slot />
	</div>
</section>

<style>
	:root {
		--px: 0.5rem;
		--pyh: 4rem;
		--py: 1rem;
	}
	section {
		width: 100%;
		padding-top: var(--py);
		padding-bottom: var(--py);
	}
	section.hero {
		width: 100%;
		padding-top: var(--pyh);
		padding-bottom: var(--pyh);
	}
	div {
		width: 100%;
		margin: 0 auto;
		padding-left: var(--px);
		padding-right: var(--px);
	}
	@media (min-width: 640px) {
		div {
			max-width: 640px;
		}
	}
	@media (min-width: 768px) {
		div {
			max-width: 768px;
		}
	}
	div.sm {
		max-width: 672px;
	}
	div.xs {
		max-width: 320px;
	}
</style>
