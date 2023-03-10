<script>
	export let small = false
	export let blue = false
	export let large = false
	export let secondary = false
	export let accent = false
	export let active = false
	export let disabled = false
	export let pink = false
	export let label = ''
</script>

<button
	on:click
	class:small
	class:large
	class:secondary
	class:accent
	class:pink
	class:blue
	class:active
	type="button"
	{disabled}
	{...$$restProps}>
	<slot>{label}</slot>
</button>

<style>
	button {
		@apply outline-none font-bold capitalize mr-1 mb-1;
		@apply rounded shadow hover:shadow-lg focus:outline-none;
		@apply ease-linear transition-all duration-150;
	}

	button {
		@apply bg-gray-200 text-gray-800 active: bg-gray-300 text-sm px-6 py-3 border-transparent;
	}

	button.blue {
		@apply bg-sky-600 text-white active:bg-sky-700;
	}

	button.secondary {
		@apply bg-gray-500 text-white active: bg-gray-600;
	}

	button.pink {
		@apply bg-fuchsia-500 text-white active: bg-fuchsia-600;
	}

	button.accent {
		@apply bg-red-600 text-white active: bg-red-700;
	}

	button.large {
		@apply text-base px-8 py-3;
	}

	button.small {
		@apply text-xs px-4 py-2;
	}
	button.active {
		@apply opacity-75;
	}
	button[disabled] {
		@apply opacity-50;
	}
</style>
