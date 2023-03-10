<script>
	import { _user, supabase } from '$lib/data'
	import { onMount } from 'svelte'
	import Avatar from './Avatar.svelte'

	let loading = false
	let username = ''
	let website = ''
	let avatarUrl = ''

	onMount(() => {
		getProfile()
	})

	const getProfile = async () => {
		try {
			loading = true
			let user = $_user
			const { data, error, status } = await supabase
				.from('profiles')
				.select('username, website, avatar_url')
				.eq('id', user.id)
				.single()

			if (error && status !== 406) throw error

			if (data) {
				username = data.username
				website = data.website
				avatarUrl = data.avatar_url
			}
		} catch (error) {
			if (error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
	}

	const updateProfile = async () => {
		try {
			loading = true
			const user = $_user

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url: avatarUrl,
				updated_at: new Date().toISOString()
			}

			let { error } = await supabase.from('profiles').upsert(updates)

			if (error) {
				throw error
			}
		} catch (error) {
			if (error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
	}
</script>

<nav class="py-2 px-2 nwp-prose">
	<a href="/user/profile">Back</a>
</nav>

{#if $_user}
	<form
		on:submit|preventDefault={updateProfile}
		class="w-full flex flex-col space-y-2">
		<div>
			<Avatar bind:url={avatarUrl} size={150} on:upload={updateProfile} />
		</div>

		<div>Email: {$_user.email}</div>
		<div>
			<label for="username">Name</label>
			<input class="input" id="username" type="text" bind:value={username} />
		</div>
		<div>
			<label for="website">Website</label>
			<input class="input" id="website" type="text" bind:value={website} />
		</div>
		<div>
			<button type="submit" class="btn btn-blue" disabled={loading}>
				{loading ? 'Saving ...' : 'Update profile'}
			</button>
		</div>
	</form>
{/if}
