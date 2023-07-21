//import the create slice
const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const userInitialState = {
  loading: true,
  data: [],
  error: ''
}

//generate pending, fulfilled, and rejection action type
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {return response.data.map(user => {return user.id})})
    .catch(error => {return error.message})
})

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: (builders) => {
    builders.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true
    })
    builders.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = userInitialState.error
    })
    builders.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.data = userInitialState.data
      state.error = action.payload
    })
  }
})

module.exports.userReducer = userSlice.reducer
module.exports.fetchUsers = fetchUsers
