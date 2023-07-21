const store = require('./app/redoStore')
const cakeActions = require('./features/cake/redoCakeSlices').cakeActions

console.log('Initial state:', store.getState())
const unsub = store.subscribe(() => {console.log('Updated status:', store.getState())})

store.dispatch(cakeActions.cakeOrdered(2))
store.dispatch(cakeActions.cakeOrdered(5))
store.dispatch(cakeActions.cakeRestocked())
