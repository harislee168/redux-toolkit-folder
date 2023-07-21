const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice').cakeReducer
const icecreamReducer = require('../features/icecream/icecreamSlices').icecreamReducer

const store = configureStore({
  reducer: {
    cake: cakeReducer
  }
})

module.exports = store
