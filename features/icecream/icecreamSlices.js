//to define the action and reducerS of ice cream

//import the create slice from redux toolkit
const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/redoCakeSlices').cakeActions

//initialize the initState
const icecreamInitialState = {
  noIcecreams: 20,
  noIcecreamsToRestocked: 0
}

//create the icecreamSlice action and reducer
const icecreamSlice = createSlice({
  name: 'icecream',
  initialState: icecreamInitialState,
  reducers: {
    icecreamOrdered: (state, action) => {
      state.noIcecreams = state.noIcecreams - action.payload
      state.noIcecreamsToRestocked = state.noIcecreamsToRestocked + action.payload
    },
    icecreamRestocked: (state, action) => {
      state.noIcecreams = state.noIcecreams + state.noIcecreamsToRestocked
      state.noIcecreamsToRestocked = icecreamInitialState.noIcecreamsToRestocked
    }
  },
  // extraReducers: {
  //   ['cake/cakeOrdered']: (state, action) => {
  //     state.noIcecreams = state.noIcecreams - action.payload
  //   }
  // }
  extraReducers: (builder) => {
    builder.addCase(cakeActions.cakeOrdered, (state, action) => {
      state.noIcecreams = state.noIcecreams - action.payload
    })
  }
})

module.exports.icecreamReducer = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions
