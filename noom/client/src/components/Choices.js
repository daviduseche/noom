import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { mealChoice } from '../actions';

class Choices extends React.Component {
  renderError({ error, touched, submitFailed }) {
    if (submitFailed && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.submitFailed ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} placeholder="Content" rows="3" cols="20" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    window.alert('thank you for submitting your meals');
    this.props.mealChoice(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="mealChoice"
          component={this.renderInput}
          label="Enter meal type"
        />
        <Field
          name="choices"
          component={this.renderInput}
          label="Enter Choices"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.mealChoice) {
    errors.mealChoice = 'You must enter mealChoice';
  }
  if (!formValues.choices) {
    errors.choices = 'You must enter choices';
  }
  return errors;
};

const afterSubmit = (result, dispatch) => dispatch(reset('Choices'));

const formWrapped = reduxForm({
  form: 'Choices',
  validate,
  onSubmitSuccess: afterSubmit
})(Choices);

export default connect(
  null,
  { mealChoice }
)(formWrapped);
