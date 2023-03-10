<script>
	import { Page, Section, H1, H2, H4, P } from '../../lib'
	export let initialValues
	export let onSubmit
	export let onBack
	export let current
	$: ({ titel, type, nav, body } = initialValues)
</script>

<Page content>
	<Section>
		<div class="space-y-2">
			<H4>{titel}</H4>
			<aside class="p-2 bg-gray-100 rounded">
				<pre class="text-sm text-gray-400">{JSON.stringify(initialValues)}</pre>
			</aside>
			<nav class="py-2">
				{#if current != 0}
					<button
						type="button"
						on:click={() => onBack(initialValues)}
						class="btn btn-blue">Back</button>
				{/if}

				<button
					type="button"
					on:click={() => onSubmit(initialValues)}
					class="btn btn-blue">Next</button>
			</nav>
		</div>
	</Section>

	<Section>
		<nav class="flex flex-col">
			
			<div class="border-b flex items-center py-2">
					<figure class="border rounded-full">
						<img
							src="https://nwp-cgn.de/test/files/airhostess_1281.png"
							class="h-20 rounded-full w-20" />
					</figure>
					<section class="flex-grow px-3 truncate">
						<H4 class="font-bold">{titel}</H4>
						<P class="font-medium">
							{body}
						</P>
					</section>
				</div>
		</nav>
	</Section>
</Page>

<style>
	/* .form-input {
		@apply px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full;
	}
	.button-blue {
		@apply bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150;
	} */
</style>
