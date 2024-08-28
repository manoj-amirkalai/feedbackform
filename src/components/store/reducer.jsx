import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newformtitle: "",
  feedbackformlist: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setNewformtitle(state, action) {
      state.newformtitle = action.payload;
    },
    setFeedbackformlist(state, action) {
      const data = action.payload;
      state.feedbackformlist = [...state.feedbackformlist,data];
    },
  },
});

export const { setNewformtitle, setFeedbackformlist } = dataSlice.actions;
export default dataSlice.reducer;
