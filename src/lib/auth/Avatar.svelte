<script>
	import { createEventDispatcher } from 'svelte'
	import { supabase, _user } from '$lib/data'

	export let size = 10
	export let url = null

	let avatarUrl = ''
	let uploading = false
	let files

	const dispatch = createEventDispatcher()

	const downloadImage = async (path) => {
		try {
			const { data, error } = await supabase.storage
				.from('avatars')
				.download(path)

			if (error) {
				throw error
			}

			const url = URL.createObjectURL(data)
			avatarUrl = url
		} catch (error) {
			if (error instanceof Error) {
				console.log('Error downloading image: ', error.message)
			}
		}
	}

	const uploadAvatar = async () => {
		try {
			uploading = true

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.')
			}

			const file = files[0]
			const fileExt = file.name.split('.').pop()
			const filePath = `${Math.random()}.${fileExt}`

			let { error } = await supabase.storage
				.from('avatars')
				.upload(filePath, file)

			if (error) {
				throw error
			}

			url = filePath
			dispatch('upload')
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			uploading = false
		}
	}

	$: if (url) downloadImage(url)
</script>

<div
	class="flex flex-col justify-center items-center shadow"
	style="width: {size}px"
	aria-live="polite">
	{#if avatarUrl}
		<img
			src={avatarUrl}
			alt={avatarUrl ? 'Avatar' : 'No image'}
			class="avatar image"
			style="height: {size}px; width: {size}px" />
	{:else}
		<div class="avatar no-image" style="height: {size}px; width: {size}px" />
	{/if}

	<label class="btn btn-blue" for="single">
		{uploading ? 'Uploading ...' : 'Upload avatar'}
	</label>
	<span class="sr-only">
		<input
			type="file"
			id="single"
			accept="image/*"
			bind:files
			on:change={uploadAvatar}
			disabled={uploading} />
	</span>
</div>
