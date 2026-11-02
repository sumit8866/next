# Next.js template

Next.js (App Router) + TypeScript + Redux Toolkit + Tailwind CSS v4, with a todo list: add, edit, delete and pagination. Todos are kept in the Redux store and saved to localStorage.

Run `npm install`, then `npm run dev`.

- `src/redux/store.ts` - the store. Saves the todos to localStorage.
- `src/redux/todoSlice.ts` - add, edit and delete.
- `src/components/TodoList.tsx` - the todo page and pagination.
- `src/app/StoreProvider.tsx` - gives the store to the whole app (used in `layout.tsx`).
