/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Page } from './Page.svelte'
export { default as Section } from './Section.svelte'
export { default as Spinner } from './Spinner.svelte'
export { default as TopBar } from './TopBar.svelte'
// @endindex

/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `${e.isFirst ? '  // import { \n' : ''}  //    ${f.name}${e.isLast ? '\n  // } from "./lib/typo"' : ','}`)
  // import { 
  //    Page,
  //    Section,
  //    Spinner,
  //    TopBar
  // } from "./lib/typo"
// @endindex

