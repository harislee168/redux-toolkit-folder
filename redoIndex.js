const store = require('./app/redoStore')
const cakeActions = require('./features/cake/redoCakeSlices').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlices').icecreamActions
const fetchUsers = require('./features/user/userSlice').fetchUsers

console.log('Initial state:', store.getState())
const unsub = store.subscribe(() => {})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.cakeOrdered(2))
// store.dispatch(cakeActions.cakeOrdered(5))
// store.dispatch(cakeActions.cakeRestocked())
// store.dispatch()

// store.dispatch(icecreamActions.icecreamOrdered(1))
// store.dispatch(icecreamActions.icecreamOrdered(3))
// store.dispatch(icecreamActions.icecreamRestocked())
