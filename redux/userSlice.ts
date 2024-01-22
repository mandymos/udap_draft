import { createSlice } from '@reduxjs/toolkit'
import { ILoggedInUser } from '../interfaces/IUser'
import { AppState } from './store'

export interface UserState {
  user: ILoggedInUser
  token: string
}

const initialState: UserState = {
  user: undefined,
  token: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state.user = action.payload
    },
    setToken(state, action) {
      state.token = action.payload
    },
  },
})

export const { setLoggedInUser, setToken } = userSlice.actions

export const getLoggedInUser = (state: AppState) => state.user.user
export const getToken = (state: AppState) => state.user.token

export default userSlice.reducer
