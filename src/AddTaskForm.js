import React, { findDOMNode } from 'react';

export default class AddTaskForm extends React.Component {
  _handleAdd() {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAdd(text);
    node.value = '';
  }

  render() {
    return <div className="addTaskForm">
      <input type="text" ref="input" placeholder="Escribe tu nueva tarea "/>
      <button onClick={this._handleAdd.bind(this)}>Agregar Tarea</button>
    </div>
  }
}
