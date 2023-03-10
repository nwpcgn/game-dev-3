<script>
	import { Page, Section, H1, H2, H4, P } from '../../lib'
	export let initialValues
	export let onSubmit
</script>

<Page content>
	<Section>
		<div class="space-y-2">
			<aside class="p-2 bg-gray-100 rounded">
				<pre class="text-sm text-gray-400">{JSON.stringify(initialValues)}</pre>
			</aside>
			<nav class="py-2">
				<button
					type="button"
					on:click={() => onSubmit(initialValues)}
					class="button-blue">Next page</button>
			</nav>
		</div>
	</Section>

	<Section>
		<nav class="flex flex-col">
			<a href="#/"
				><div class="border-b border-t flex items-center py-2">
					<figure class="border rounded-md" data-pg-collapsed>
						<img
							src="https://nwp-cgn.de/test/files/airhostess_1281.png"
							class="h-20 rounded-lg w-20" />
					</figure>
					<section class="flex-grow px-3 truncate">
						<H4>Heading 4</H4>
						<P>
							This is a paragraph, one or more lines of text.
						</P>
					</section>
				</div></a>
			<a href="#/"
				><div class="border-b flex items-center py-2">
					<figure class="border rounded-full">
						<img
							src="https://nwp-cgn.de/test/files/airhostess_1281.png"
							class="h-20 rounded-full w-20" />
					</figure>
					<section class="flex-grow px-3 truncate">
						<H4 class="font-bold">Heading 4</H4>
						<P class="font-medium">
							This is a paragraph, one or more lines of text.
						</P>
					</section>
				</div></a>
			<a href="#/"
				><div class="border-b flex items-center py-2">
					<figure class="border rounded-full" data-pg-collapsed>
						<img
							src="https://nwp-cgn.de/test/files/airhostess_1281.png"
							class="h-20 rounded-full w-20" />
					</figure>
					<section class="flex-grow px-3 truncate">
						<H2 class="font-bold mb-1">Heading 2</H2>
					</section>
				</div></a>
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
