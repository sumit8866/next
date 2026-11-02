# Next.js template

Next.js (App Router) + TypeScript + Redux Toolkit + Tailwind CSS v4, with a simple todo pagination example.

Run `npm install`, then `npm run dev`.

- `src/redux/store.ts` - the store. Add new slices here.
- `src/redux/todoSlice.ts` - example slice: fetches one page of todos.
- `src/app/StoreProvider.tsx` - gives the store to the whole app (used in `layout.tsx`).
- `src/components/TodoList.tsx` - example page. Needs `"use client"` because it uses Redux hooks.
- `src/components/Pagination.tsx` - reusable pagination buttons.
"# next" 
