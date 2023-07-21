//this is the create store happen. The steps are:
//1. import configure store library and also import the reducer
//2. create the store using configure store and takes object parameters where inside is the reducer object
//3. export the store

const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/redoCakeSlices').cakeReducer
const icecreamReducer = require('../features/icecream/icecreamSlices').icecreamReducer
const userReducer = require('../features/user/userSlice').userReducer
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => {return getDefaultMiddleware().concat(logger)}
})

module.exports = store
