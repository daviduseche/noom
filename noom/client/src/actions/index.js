import mealDb from '../apis/questionsDb';

export const mealChoice = formValues => async dispatch => {
  const response = await mealDb.post('/mealDb', formValues);

  dispatch({ type: 'ADMIN_QUESTIONS', payload: response.data });
};

export const poll = () => async dispatch => {
  const response = await mealDb.get('/mealDb');

  dispatch({ type: 'POLL_QUESTIONS', payload: response.data });
};

export const results = pollResults => async dispatch => {
  const response = await mealDb.post('/resultsDb', pollResults);

  dispatch({ type: 'RESULTS_POST', payload: response.data });
};

export const getResults = () => async dispatch => {
  const response = await mealDb.get('/resultsDb');

  dispatch({ type: 'QUESTION_RESULTS', payload: response.data });
};
