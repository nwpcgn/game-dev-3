<script>
	export let lead = false, small = false, quote = false
</script>

{#if !quote}
	<p {...$$restProps} class:lead class:small>
		<slot />
	</p>
{:else}
	<blockquote>
		<p {...$$restProps}>
			<slot />
		</p>
		{#if $$slots.footer}
			<footer class="block">
				<slot name="footer">
					2023@<cite>nwp-studio</cite>
				</slot>
			</footer>
		{/if}
	</blockquote>
{/if}

<style>
	p {
		@apply leading-relaxed;
	}
	.lead {
		@apply text-lg leading-relaxed;
	}
	.small {
		@apply leading-normal;
	}
	blockquote {
		@apply bg-blue-500 bg-opacity-10 border-blue-700 border-l-4 border-solid pl-5 pr-1 py-6 rounded-bl rounded-br rounded-tl rounded-tr;
	}
</style>
