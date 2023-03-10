<!-- components/FilterButton.svelte -->
<script>
	export let filter = 'all'
</script>

<section {...$$restProps}>
	<nav class="filters btn-group">
		<button
			class="btn toggle-btn"
			class:active={filter === 'all'}
			aria-pressed={filter === 'all'}
			on:click={() => (filter = 'all')}>
			<span class="visually-hidden">Show</span>
			<span>All</span>
			<span class="visually-hidden">tasks</span>
		</button>
		<button
			class="btn toggle-btn"
			class:active={filter === 'active'}
			aria-pressed={filter === 'active'}
			on:click={() => (filter = 'active')}>
			<span class="visually-hidden">Show</span>
			<span>Active</span>
			<span class="visually-hidden">tasks</span>
		</button>
		<button
			class="btn toggle-btn"
			class:active={filter === 'completed'}
			aria-pressed={filter === 'completed'}
			on:click={() => (filter = 'completed')}>
			<span class="visually-hidden">Show</span>
			<span>Completed</span>
			<span class="visually-hidden">tasks</span>
		</button>
	</nav>
</section>

<style>
	.btn-group {
		@apply grid grid-cols-1 sm:grid-cols-3 gap-1;
	}
	.toggle-btn {
		@apply bg-slate-50 transition-colors duration-150 ease-linear;
	}
	.toggle-btn.active {
		@apply bg-slate-200;
	}
</style>
