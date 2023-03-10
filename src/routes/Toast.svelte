<script>
	import svelteLogo from '../assets/svelte.svg'
	import { Page, Section, H4 } from '../lib'
	import { addToast, Toasts } from '../lib/toast'
	let message = 'Page loaded !!'
	let types = ['success', 'error', 'info']
	let type = 'info'
	let dismissible = true
	let timeout = 2000
	$: output = `addToast({ '${message}', '${type}', ${dismissible}, ${timeout} })`
</script>

<Toasts />

<Page>
	<Section>
		<header>
			<div class="flex">
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" class="logo" alt="Vite Logo" />
				</a>
				<a href="https://svelte.dev" target="_blank" rel="noreferrer">
					<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
				</a>
			</div>
		</header>
	</Section>
	<hr />
	<Section>
		<div class="card">
			<H4 class="card-header">Tost Demo</H4>
			<div class="my-4 p-2 rounded bg-gray-50 text-gray-500">
				<pre>{output}</pre>
			</div>
			<div class="card-body">
				<form on:submit|preventDefault class="grid grid-cols-2 gap-2">

					<div class="mb-0">
						<label class="form-label"> Message:</label>
						<input
							list="messages"
							class="form-control"
							type="text"
							bind:value={message} />
						<datalist id="messages">
							<option value="Login Succseed !" /><option
								value="Login Failed !" /><option
								value="Fetch Succseed !" /><option
								value="Fetch Failed !" /><option
								value="Page loaded !" /></datalist>
					</div>

					<div class="mb-0">
						<label class="form-label"> Timeout:</label>
						<input
							class="form-control"
							bind:value={timeout}
							type="number"
							step="500" />
					</div>

					<div class="mb-0">
						<label class="form-label"> Type:</label>
						<select class="form-control" bind:value={type}>
							{#each types as type}
								<option value={type}>{type}</option>
							{/each}
						</select>
					</div>

					<div class="mb-0">
						<span class="form-label"> Autoclose:</span>
						<label class="flex items-center py-2 px-2" for="flexCheckDefault">
							<input
								class="w-7 h-7 rounded"
								bind:checked={dismissible}
								type="checkbox"
								value=""
								id="flexCheckDefault" />
							<span class="text-lg ml-2">
								Dismissible?
							</span>
						</label>
					</div>

					<div class="py-2">
						<button
							on:click={() => addToast({ message, type, dismissible, timeout })}
							class="btn btn-secondary">
							Add toast
						</button>
					</div>

				</form>
			</div>
		</div>
	</Section>
</Page>

<style>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.svelte:hover {
		filter: drop-shadow(0 0 2em #ff3e00aa);
	}
	.read-the-docs {
		color: #888;
	}
</style>
