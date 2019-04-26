import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Choices from './Choices';
import Poll from './Poll';
import Results from './Results';
import Meals from './Meals';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={Meals} />
          <Route path="/choices" exact component={Choices} />
          <Route path="/poll" exact component={Poll} />
          <Route path="/results" exact component={Results} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
