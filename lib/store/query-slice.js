import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { generateMockResponse } from "@/lib/mock-data"

export const submitQuery = createAsyncThunk("query/submit", async (query, { rejectWithValue }) => {
  try {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate mock response
    const response = generateMockResponse(query)
    return { query, response }
  } catch (error) {
    return rejectWithValue("Failed to process query. Please try again.")
  }
})

const querySlice = createSlice({
  name: "query",
  initialState: {
    currentQuery: "",
    currentResult: null,
    loading: false,
    error: null,
    history: [],
  },
  reducers: {
    rerunQuery: (state, action) => {
      state.currentQuery = action.payload
      state.loading = true
      state.error = null
    },
    clearHistory: (state) => {
      state.history = []
    },
    setQueryResult: (state, action) => {
      state.loading = false
      state.currentResult = action.payload.response
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuery.pending, (state, action) => {
        state.currentQuery = action.meta.arg
        state.loading = true
        state.error = null
      })
      .addCase(submitQuery.fulfilled, (state, action) => {
        state.loading = false
        state.currentResult = action.payload.response

        // Add to history
        state.history.unshift({
          query: action.payload.query,
          result: action.payload.response,
          timestamp: Date.now(),
        })

        // Keep only the last 10 queries
        if (state.history.length > 10) {
          state.history = state.history.slice(0, 10)
        }
      })
      .addCase(submitQuery.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || "An unexpected error occurred"
      })
  },
})

export const { rerunQuery, clearHistory, setQueryResult } = querySlice.actions
export default querySlice.reducer

