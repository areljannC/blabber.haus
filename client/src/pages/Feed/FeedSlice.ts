import { createSlice } from '@reduxjs/toolkit'

const FeedSlice = createSlice({
  name: `feed`,
  initialState: { posts: [] },
  reducers: {}
})

export default FeedSlice.reducer