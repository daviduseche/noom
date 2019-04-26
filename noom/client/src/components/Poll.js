import React from 'react';
import { connect } from 'react-redux';
import { poll, results } from '../actions';
import _ from 'lodash';

class Poll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }
  componentDidMount() {
    this.props.poll();
  }

  radioChange = e => {
    const questionid = e.target.name;
    const answer = e.target.value;
    const question = e.target.placeholder;
    const results = this.state.results;
    let result = results.map(idx => {
      if (idx.questionid === questionid) {
        idx.answer = answer;
        return idx;
      }
      return idx;
    });

    this.setState({
      results: [...this.state.results, { questionid, question, answer }]
    });
  };

  renderChoices = (choices, id, mealChoice) => {
    let choice = choices.split(' ').map(value => {
      return <label>{value}</label>;
    });
    console.log(choice);
    return choice;
  };

  renderQuestions = () => {
    let questions = this.props.questions.map((idx, index) => {
      return (
        <div
          style={{
            border: '1px solid #F0F0F0',
            margin: '24px',
            padding: '12px',
            width: '75%',
            borderRadius: '10px'
          }}
          key={idx.id}
        >
          <span>{idx.id}.)</span>
          {idx.mealChoice}
          <fieldset style={{ border: 'none' }} id={idx.id}>
            {this.renderChoices(idx.choices, idx.id, idx.mealChoice)}
          </fieldset>
        </div>
      );
    });
    console.log(questions);
    return questions;
  };

  render() {
    return (
      <div>
        <h4 className="ui header">Meals</h4>
        <form>{this.renderQuestions()}</form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    questions: state.meals
  };
};

export default connect(
  mapStateToProps,
  { poll, results }
)(Poll);
