const createSlice = require('@reduxjs/toolkit').createSlice

const cakeInitialState = {
  noCakes: 10
}

const cakeSlices = createSlice({
  name: 'cake',
  initialState: cakeInitialState,
  reducers: {
    ordered: (state, action) => {
      state.noCakes = state.noCakes - 1
    },
    restocked: (state, action) => {
      state.noCakes = state.noCakes + action.payload
    }
  }
})

module.exports.cakeReducer = cakeSlices.reducer
module.exports.cakeActions = cakeSlices.actions
