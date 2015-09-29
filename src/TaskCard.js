import React from 'react';

export default class TaskCard extends React.Component {
  render() {
    return <div className="taskCard" key={this.props.key}>{this.props.taskData.name}</div>;
  }
}
