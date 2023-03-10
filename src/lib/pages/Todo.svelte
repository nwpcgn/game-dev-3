<!-- components/Todo.svelte -->
<script>
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let todo
	let delting = false
	let editing = false // track editing mode
	let name = todo.name // hold the name of the todo being edited

	function update(updatedTodo) {
		todo = { ...todo, ...updatedTodo } // applies modifications to todo
		dispatch('update', todo) // emit update event
	}

	function onCancel() {
		name = todo.name // restores name to its initial value and
		editing = false // and exit editing mode
	}

	function onSave() {
		update({ name: name }) // updates todo name
		editing = false // and exit editing mode
	}

	function onRemove() {
		dispatch('remove', todo) // emit remove event
	}

	function onEdit() {
		editing = true // enter editing mode
	}

	function onToggle() {
		update({ completed: !todo.completed }) // updates todo status
	}
</script>

<div class="w-full flex py-2 border-b">
	{#if editing}
		<!-- markup for editing todo: label, input text, Cancel and Save Button -->
		<form
			on:submit|preventDefault={onSave}
			class="grid gap-4 w-full my-8 px-4 py-6 border border-primary-100 rounded-md"
			on:keydown={(e) => e.key === 'Escape' && onCancel()}>
			<div class="grid gap-3">
				<label for="todo-{todo.id}">
					<span class="text-sm  text-primary-500 font-light">Editing</span>
					<span class="text-xl italic font-serif font-bold">{todo.name}</span
					></label>
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
	{:else}
		<!-- markup for displaying todo: checkbox, label, Edit and Delete Button -->
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
	{/if}
</div>
