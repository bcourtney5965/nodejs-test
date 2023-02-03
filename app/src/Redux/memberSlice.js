import { createSlice } from '@reduxjs/toolkit';

export const memberSlice = createSlice({
  name: 'members',
  initialState: {
    members: [],
    membersFiltered: [],
    filterTerm: ''
  },
  reducers: {
    setMembers: (state, action) => {
      state.members = action.payload;
    },
    setFilteredMembers: (state, action) => {
      state.membersFiltered = action.payload;
    },
    filterMembers: (state, action) => {
      let filterTerm = action.payload || '';
      const members = state.members || [];
      let filteredMembers = [];
      filteredMembers = members.filter(member => {
        return member.firstName.toLowerCase().includes(filterTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(filterTerm.toLowerCase());
      });
      state.membersFiltered = filteredMembers;
      state.filterTerm = filterTerm;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMembers, setFilteredMembers, filterMembers } = memberSlice.actions;

export default memberSlice.reducer;