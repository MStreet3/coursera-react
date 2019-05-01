import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export function ConfigureStore() {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      leaders: Leaders,
      promotions: Promotions
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}
