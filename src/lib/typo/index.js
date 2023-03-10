/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as Button } from './Button.svelte'
export { default as H1 } from './H1.svelte'
export { default as H2 } from './H2.svelte'
export { default as H3 } from './H3.svelte'
export { default as H4 } from './H4.svelte'
export { default as H5 } from './H5.svelte'
export { default as H6 } from './H6.svelte'
export { default as P } from './P.svelte'
// @endindex

/* eslint-disable */

// @index(['./*.svelte'], (f, _, e) => `${e.isFirst ? '  // import { \n' : ''}  //    ${f.name}${e.isLast ? '\n  // } from "./lib/typo"' : ','}`)
  // import { 
  //    Button,
  //    H1,
  //    H2,
  //    H3,
  //    H4,
  //    H5,
  //    H6,
  //    P
  // } from "./lib/typo"
// @endindex

