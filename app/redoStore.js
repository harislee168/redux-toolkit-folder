//this is the create store happen. The steps are:
//1. import configure store library and also import the reducer
//2. create the store using configure store and takes object parameters where inside is the reducer object
//3. export the store

const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/redoCakeSlices').cakeReducer

store = configureStore({
  reducer: {
    cake: cakeReducer
  }
})

module.exports = store
