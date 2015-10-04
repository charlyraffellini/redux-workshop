import React from 'react';

export default class TaskCard extends React.Component {
  _handleRemove (id){
    let { task, onRemove } = this.props;
    onRemove(task.id);
  }

  render() {
    let { task } = this.props;
    return <div className="taskCard">
      <button onClick={this._handleRemove.bind(this)}>X</button>
      <h3>{ task.name }</h3>
    </div>;
  }
}
