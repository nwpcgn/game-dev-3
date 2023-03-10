<script>
	import { Page, Section } from '../../lib'
	export let initialValues
	export let onSubmit
	export let onBack
	let pageData = { page: 'Page2' }
</script>

<Page>
	<Section>
		<div class="flex flex-col">
			<label class="label">Page Name</label>
			<input bind:value={initialValues.page} class="form-input" />
		</div>
		<div class="p-2 bg-gray-100 rounded">
			<pre class="text-sm text-gray-400">{JSON.stringify(initialValues)}</pre>
		</div>
		<nav class="pt-4">
			<button
				type="button"
				class="button-blue"
				on:click={() => onBack(initialValues)}>Previous page</button>
			<button
				type="button"
				on:click={() => onSubmit(initialValues)}
				class="button-blue">Submit</button>
		</nav>
	</Section>
	<Section>
		<nav class="flex flex-col">
			<a href="#/"
				><div class="border-b border-t flex items-center justify-between p-3">
					<span>Link 1</span><span>X</span>
				</div></a>
			<a href="#/" data-pg-collapsed
				><div class="border-b flex items-center justify-between p-3">
					<span>Link 1</span><span>X</span>
				</div></a>
		</nav>
	</Section>
</Page>
