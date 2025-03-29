import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface QueryState {
  loading: boolean
  history: Array<{
    query: string
    result: any
    timestamp: number
  }>
  currentQuery: string | null
  currentResult: any | null
  error: string | null
}

const initialState: QueryState = {
  loading: false,
  history: [],
  currentQuery: null,
  currentResult: null,
  error: null
}

export const submitQuery = createAsyncThunk(
  'query/submit',
  async (query: string) => {
    // Simulated API call
    const response = {
      text: query,
      data: [{ name: 'Sample', value: 100 }],
    }
    return { query, response }
  }
)

export const rerunQuery = createAsyncThunk(
  'query/rerun',
  async (query: string) => {
    // Simulated API call - reuses same logic as submitQuery
    const response = {
      text: query,
      data: [{ name: 'Sample', value: 100 }],
    }
    return { query, response }
  }
)

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    clearHistory: (state) => {
      state.history = []
    },
    setQueryResult: (state, action) => {
      state.loading = false
      state.history.unshift({
        query: action.payload.query,
        result: action.payload.response,
        timestamp: Date.now()
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitQuery.pending, (state) => {
        state.loading = true
      })
      .addCase(submitQuery.fulfilled, (state, action) => {
        state.loading = false
        state.history.unshift({
          query: action.payload.query,
          result: action.payload.response,
          timestamp: Date.now(),
        })
      })
      .addCase(rerunQuery.pending, (state) => {
        state.loading = true
      })
      .addCase(rerunQuery.fulfilled, (state, action) => {
        state.loading = false
        state.history.unshift({
          query: action.payload.query,
          result: action.payload.response,
          timestamp: Date.now(),
        })
      })
  },
})

export const { clearHistory, setQueryResult } = querySlice.actions
export default querySlice.reducer 