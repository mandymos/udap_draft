import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { userSlice } from './userSlice'

const persistConfig = {
  key: 'primary',
  version: 1,

  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
})

export const store = configureStore({
  reducer: { user: userSlice.reducer },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

const makeStore = () => store

export const wrapper = createWrapper<AppStore>(makeStore)
