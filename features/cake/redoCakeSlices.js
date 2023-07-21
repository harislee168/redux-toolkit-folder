//create slices is to define the action and reducer!

//steps to do it
//1. import the create slice from @reduxjs/toolkit
//2. create the initialState oject
//3. create the slice taking objects that has 3 params: name, initialState, and reducers
//4. export the reducer and actions

const createSlice = require('@reduxjs/toolkit').createSlice

const cakeInitialState = {
  noCakes: 10,
  noCakesToRestocked: 0
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState: cakeInitialState,
  reducers: {
    cakeOrdered: (state, action) => {
      state.noCakes = state.noCakes - action.payload
      state.noCakesToRestocked = state.noCakesToRestocked + action.payload
    },
    cakeRestocked: (state, action) => {
      state.noCakes = state.noCakes + state.noCakesToRestocked
      state.noCakesToRestocked = cakeInitialState.noCakesToRestocked
    }
  }
})

module.exports.cakeReducer = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
