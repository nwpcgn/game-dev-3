<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let todo
	let delting = false
	let editing = false
	let name = todo.name
   const onSave = () => {
      dispatch("onSave", todo)
   };
   
</script>

	<form
			on:submit|preventDefault={onSave}
			class="grid gap-4 w-full my-8 px-4 py-6 border border-primary-100 rounded-md"
			on:keydown={(e) => e.key === 'Escape' && onCancel()}>
			<div class="grid gap-3">
				<label for="todo-{todo.id}">
					<span class="text-sm  text-primary-500 font-light">Editing</span>
					 <span class="text-xl italic font-serif font-bold">{todo.name}</span></label>
				<input
					bind:value={name}
					type="text"
					id="todo-{todo.id}"
					autoComplete="off"
					class="input" />
			</div>
			<div class="flex items-center space-x-1">
				<button type="button" class="btn btn-red" on:click={onRemove}>
					Delete<span class="visually-hidden"> {todo.name}</span>
				</button>
				<span class="flex-1" />
				<button class="btn btn-blue todo-edit" type="submit" disabled={!name}>
					Save<span class="visually-hidden">new name for {todo.name}</span>
				</button>
				<button
					class="btn btn-gray todo-cancel"
					on:click={onCancel}
					type="button">
					Cancel<span class="visually-hidden">renaming {todo.name}</span>
				</button>
			</div>
		</form>

