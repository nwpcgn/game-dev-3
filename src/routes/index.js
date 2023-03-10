/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Home } from './Home.svelte'
export { default as Multi } from './Multi.svelte'
export { default as NotFound } from './NotFound.svelte'
export { default as Settings } from './Settings.svelte'
export { default as Toast } from './Toast.svelte'
export { default as Todos } from './Todos.svelte'
// @endindex

/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `${e.isFirst ? '  // import { \n' : ''}  //    ['/${f.name.toLowerCase()}', '${f.name}']${e.isLast ? '\n  // } from "./lib/typo"' : ','}`)
  // import { 
  //    ['/home', 'Home'],
  //    ['/multi', 'Multi'],
  //    ['/notfound', 'NotFound'],
  //    ['/settings', 'Settings'],
  //    ['/toast', 'Toast'],
  //    ['/todos', 'Todos']
  // } from "./lib/typo"
// @endindex

