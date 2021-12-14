import { configureStore } from "@reduxjs/toolkit";
// ...

const store = configureStore({
  reducer: {
    // @ts-ignore
    posts: postsReducer,
    // @ts-ignore
    comments: commentsReducer,
    // @ts-ignore
    users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
