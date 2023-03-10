// @index(['./routes/*.svelte'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
import Home from './routes/Home.svelte';
import Multi from './routes/Multi.svelte';
import NotFound from './routes/NotFound.svelte';
import Settings from './routes/Settings.svelte';
import Toast from './routes/Toast.svelte';
import Todos from './routes/Todos.svelte';
// @endindex

const routes = {
	'/': Home,
	'/todos': Todos,
	'/multi': Multi,
	'/toast': Toast,
	'/settings': Settings,
	'*': NotFound
}

export default routes
