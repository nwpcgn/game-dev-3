<!-- components/Todos.svelte -->
<script>
	import MoreActions from './MoreActions.svelte'
	import FilterButton from './FilterButton.svelte'
	import Todo from './Todo.svelte'
	export let todos = []

	let newTodoName = ''
	$: newTodoId = totalTodos ? Math.max(...todos.map((t) => t.id)) + 1 : 1
	$: totalTodos = todos.length
	$: completedTodos = todos.filter((todo) => todo.completed).length

	function removeTodo(todo) {
		todos = todos.filter((t) => t.id !== todo.id)
	}

	function addTodo() {
		if (newTodoName === '') return
		todos = [...todos, { id: newTodoId, name: newTodoName, completed: false }]
		newTodoName = ''
	}

	function updateTodo(todo) {
		const i = todos.findIndex((t) => t.id === todo.id)
		todos[i] = { ...todos[i], ...todo }
	}

	let filter = 'all'
	const filterTodos = (filter, todos) =>
		filter === 'active'
			? todos.filter((t) => !t.completed)
			: filter === 'completed'
			? todos.filter((t) => t.completed)
			: todos
</script>

<!-- Todos.svelte -->
<div class="todoapp stack-large">
	<!-- NewTodo -->
	<form on:submit|preventDefault={addTodo} class="flex space-x-2 py-4">
		<input
			bind:value={newTodoName}
			placeholder="What needs to be done?"
			type="text"
			id="todo-0"
			autocomplete="off"
			class="form-input" />
		<button type="submit" disabled="" class="button-blue"> Add </button>
	</form>

	<hr />

	<FilterButton class="py-4" bind:filter />



	<ul
		role="list"
		class="todo-list border-t"
		aria-labelledby="list-heading">
		{#each filterTodos(filter, todos) as todo (todo.id)}
			<li class="todo">
				<Todo
					{todo}
					on:update={(e) => updateTodo(e.detail)}
					on:remove={(e) => removeTodo(e.detail)} />
			</li>
		{:else}
			<li>Nothing to do here!</li>
		{/each}
	</ul>

	<MoreActions class="py-4" />
</div>
