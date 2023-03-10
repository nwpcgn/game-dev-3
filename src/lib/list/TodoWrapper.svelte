<script>
  import Todos from './Todos.svelte'
	import { _list } from '../data'
  // $: console.log($_list)
</script>

<Todos bind:todos={$_list} />
