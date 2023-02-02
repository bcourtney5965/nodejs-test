import { createSlice } from '@reduxjs/toolkit'

export const memberSlice = createSlice({
  name: 'members',
  initialState: {
    list: []
  },
  reducers: {
    setMembers: (state, action) => {
      state.list = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMembers } = memberSlice.actions

export default memberSlice.reducer