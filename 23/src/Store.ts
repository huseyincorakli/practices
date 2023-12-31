import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './stores/Counter'
import siteSlice from './stores/Site'
export const store = configureStore({
  reducer: {
    counter:counterSlice,
    site:siteSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch