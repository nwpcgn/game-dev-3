<script>
	import Page1 from './patreals/Page1.svelte'
	import Page2 from './patreals/Page2.svelte'
	const pages = [Page1, Page2]
	let page = 0
	let pagesState = [{ page: 'Page1' }, { page: 'Page2' }]
	const onSubmit = (values) => {
		if (page === pages.length - 1) {
			// On our final page with POST our data somewhere
			console.log('Submitted data: ', pagesState)
		} else {
			// If we're not on the last page, store our data and increase a step
			pagesState[page] = values
			pagesState = pagesState // Triggering update
			page += 1
		}
	}

	const onBack = (values) => {
		if (page === 0) return
		pagesState[page] = values
		pagesState = pagesState // Triggering update
		page -= 1
	}
</script>

<svelte:component
	this={pages[page]}
	{onSubmit}
	{onBack}
	initialValues={pagesState[page]} />
