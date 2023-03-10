<script>
	import * as transitions from 'svelte/transition'
	export let animation = 'fly'
	export let open = false
	export let duration = 200
	export let center
	let _animation = transitions[animation]
	$: _animation =
		typeof animation === 'function' ? animation : transitions[animation]

	function toggle() {
		open = !open
	}
</script>

{#if open}
	<div
		class:center
		in:_animation={{ duration: duration, x: 300 }}
		out:_animation={{ duration: duration, x: -300 }}
		{...$$restProps}>
			{#if $$slots.trigger}
				<a href="#/" on:click|preventDefault={toggle}>
					<slot name="trigger" />
				</a>
			{:else}
				<slot {toggle} />
			{/if}
	</div>
{/if}

<style>
	:root {
		--bg: rgb(0, 0, 0, 0.9);
		--col: #fff;
		--z: +1;
	}
	div {
		position: absolute;
		inset: 0;
		z-index: var(--z, +1);
		background-color: var(--bg);
		color: var(--col);
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	div.center {
		align-items: center;
		justify-content: center;
	}
</style>
