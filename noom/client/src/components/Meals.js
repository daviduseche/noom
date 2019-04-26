import React from 'react';
import { Link } from 'react-router-dom';
const Meals = () => {
  return (
    <div>
      <Link to="/choices" className="item">
        <button className="ui button blue">Add meals</button>
      </Link>
      <Link to="/poll" className="item">
        <button className="ui button orange">See meal choices</button>
      </Link>
    </div>
  );
};

export default Meals;
