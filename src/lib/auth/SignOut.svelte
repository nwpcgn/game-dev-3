<script>
	import { _user, supabase } from '$lib/data'
	export let loading
	const signOut = async () => {
		loading = true
		try {
			let { error } = await supabase.auth.signOut()
			if (error) throw error
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
	}
</script>

<span on:click={signOut} {...$$restProps}>
	<slot><!-- optional fallback --></slot>
</span>
