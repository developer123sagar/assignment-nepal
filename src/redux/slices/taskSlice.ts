/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "../../types";

interface initStateType {
  selectedTask: Tasks | null;
  selectedMerchant: any;
  role: "worker" | "employer" | "client" | ""
}

const initialState: initStateType = {
  selectedTask: null,
  selectedMerchant: null,
  role: ""
}

const taskSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    setSelectedMerchant: (state, action) => {
      state.selectedMerchant = action.payload
    },
    setRole: (state, action) => {
      state.role = action.payload
    }
  }
})

export const { setSelectedTask, setSelectedMerchant, setRole } = taskSlice.actions
export default taskSlice.reducer
