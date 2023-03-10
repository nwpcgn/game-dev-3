<script>
	import Page1 from './patreals/Page1.svelte'
	import Page2 from './patreals/Page2.svelte'
	import { Section, Page, H1, Button } from '../lib'
	import { fade } from 'svelte/transition'
	import { onMount } from 'svelte'
	import Layer from '../lib/components/Layer.svelte'

	let t1 = false
	let t2 = false

	const toggle = () => {
		t1 = !t1
	}
	const toggle2 = () => {
		t2 = !t2
	}
	onMount(() => {
		//	let timer = setInterval(() => (t1 = !t1), 2000)
		//	return () => clearInterval(timer)
	})
</script>

<Page>
	<div class="flex-1 relative">
		<Section>
			<H1>Page</H1>
			<Button blue on:click={toggle}>Toggle</Button>
			<Button blue on:click={toggle2}>Toggle</Button>
		</Section>

		<Layer animation="fade" center bind:open={t1}>
			<div class="text-center">
				<H1>Toggle 1!</H1>
				<Button blue on:click={toggle}>Toggle</Button>
			</div>
		</Layer>
		<Layer animation="fly" center bind:open={t2}>
			<div class="text-center" slot="trigger">
				<H1>Toggle 2!</H1>
				<Button blue>Toggle Slot</Button>
			</div>
		</Layer>
	</div>
</Page>
