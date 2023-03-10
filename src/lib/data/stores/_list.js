
// import { writable } from 'svelte/store';
import { localStore } from '../utils/localStore';

export const _list = localStore('nwp_list', [
   { id: 1, name: 'Visit MDN web docs', completed: true },
   { id: 2, name: 'Complete the Svelte Tutorial', completed: false },
 ]);

