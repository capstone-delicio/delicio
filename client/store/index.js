import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import auth from './auth'
import yelp from './yelp'
import user from './user'
import friends from './friends'
import event from './event'
import eventPicks from './eventPicks'

const reducer = combineReducers({
  auth,
  user,
  yelp,
  friends,
  event,
  eventPicks,
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './yelp'
export * from './user'
export * from './friends'
export * from './event'
