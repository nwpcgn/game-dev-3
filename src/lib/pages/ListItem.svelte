<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let todo, onEdit, onToggle


</script>

<div class="flex items-center px-2 truncate">
			<input
				type="checkbox"
				id="todo-{todo.id}"
				class="w-8 h-8"
				on:click={onToggle}
				checked={todo.completed} />
			<label for="todo-{todo.id}" class="px-4 py-1 font-medium text-2xl"
				>{todo.name}</label>
		</div>
		<div class="ml-auto">
			<button type="button" class="btn" on:click={onEdit}>
				Edit<span class="visually-hidden"> {todo.name}</span>
			</button>
		</div>

