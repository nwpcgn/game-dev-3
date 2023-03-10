<script>
	import { _user, supabase } from '$lib/data'
	import { H1, H2, P, Button } from '$lib'
	import Fa from 'svelte-fa'
	import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
	import { onMount } from 'svelte'
	let loading = false
	let userData
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
				userData = data
				username = data.username
				website = data.website
				avatarUrl = data.avatar_url
			}
		} catch (error) {
			if (error) {
				console.error(error.message)
			}
		} finally {
			loading = false
		}
	}
	const signOut = async () => {
		loading = true
		try {
			let { error } = await supabase.auth.signOut()
			if (error) throw error
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			}
		} finally {
			loading = false
		}
	}
</script>

<nav class="py-2 px-2 nwp-prose">
	<a href="/">Start</a>
</nav>
<div class="flex flex-col md:flex-row md:items-stretch -mx-4 -mb-4 md:mb-0">
	<div class="w-full px-4 mb-4 md:mb-0">
		<div class="p-6 space-y-2 flex flex-col rounded nwp-prose">
			<h1>User Panel</h1>

			<h4 class="flex flex-col">
				<em>User Id:</em>
				<small class="my-0 text-xs opacity-75">{$_user.id}</small>
			</h4>
			<p><a href="/user/profile/edit">Edit Profile</a></p>
			<div class="py-2">
				<Button accent on:click={signOut}>Logout</Button>
			</div>
		</div>
	</div>
	<div class="w-full px-4 mb-4 md:mb-0">
		<div
			class="p-6 space-y-2 items-center flex flex-col shadow rounded nwp-prose">
			<div><Fa icon={faUserCircle} size="3x" /></div>
			<h2>{username}</h2>
			<h4>{$_user.email}</h4>
			<p><a href={website} target="_blank">{website}</a></p>
		</div>
	</div>
</div>
