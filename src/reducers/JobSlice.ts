import {createSlice} from "@reduxjs/toolkit";
import { fetchJobs } from "./JobThunks.ts";
import type {Job} from "../types.ts";

interface JobState {
  jobsList: Job[],
  skills: string[],
  isLoading: boolean;

  search: string;
  city: string;
  page: number;
  pagination: {
    currentPage: number;
    totalPages: number;
  } | null;
}

const initialState: JobState = {
  jobsList: [],
  skills: [],
  isLoading: true,

  search: '',
  city: '',
  page: 1,
  pagination: null,
}

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setSkill(state, action) {
      state.skills.push(action.payload);
    },
    removeSkill(state, action) {
      state.skills = state.skills.filter(skill => skill !== action.payload);
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, state => {
      state.isLoading = true;
    })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobsList = action.payload.jobs;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      })
  }
})

export const {
  setSkill,
  removeSkill,
  setSearch,
  setCity,
  setPage
} = jobSlice.actions;

export default jobSlice.reducer;