import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //rename on fly to be clear which reducer is being used
import mealsReducer from './mealsReducer';
import resultsReducer from './resultsReducer';

export default combineReducers({
  meals: mealsReducer,
  form: formReducer,
  results: resultsReducer
});
