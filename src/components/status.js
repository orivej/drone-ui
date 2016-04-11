import React from 'react';

const SUCCESS = 'success';
const FAILURE = 'failure';
const KILLED = 'killed';
const ERROR = 'error';
const RUNNING = 'running';
const PENDING = 'pending';


export default
class Status extends React.Component {
  render() {
    let {state} = this.props;

    state = state.toLowerCase();

    let classes = ['status'];

    state == SUCCESS && classes.push(SUCCESS);
    state == FAILURE && classes.push(FAILURE);
    state == KILLED && classes.push(KILLED);
    state == ERROR && classes.push(ERROR);
    state == RUNNING && classes.push(RUNNING);
    state == PENDING && classes.push(PENDING);

    return (
      <div className={classes.join(' ')}>{state}</div>
    );
  }
}