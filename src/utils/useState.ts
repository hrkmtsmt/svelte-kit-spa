import { writable } from 'svelte/store';

export const useState = <T>(initialState: T) => {
  const store = writable(initialState);

  const unsubscriber = store.subscribe(() => {
    // subscribe
  });

  return [store, store.update, unsubscriber] as const;
};
