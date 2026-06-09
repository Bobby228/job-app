import { createAsyncThunk } from "@reduxjs/toolkit";

type FetchJobsParams = {
  search: string;
  city: string;
  page: number;
  skills: string[];
};

export const fetchJobs = createAsyncThunk(
  "jobs/fetchJobs",
  async (params: FetchJobsParams, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();

      if (params.search) query.append("search", params.search);
      if (params.city) query.append("city", params.city);
      query.append("page", String(params.page));

      if (params.skills.length > 0) {
        query.append("skills", params.skills.join(","));
      }

      const res = await fetch(
        `https://kata-jobs.onrender.com/api/jobs?${query.toString()}`
      );

      if (!res.ok) {
        throw new Error("Ошибка!");
      }

      const data = await res.json();

      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);