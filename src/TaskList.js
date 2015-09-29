import React from 'react';
import TaskCard from './TaskCard';

export default class TaskList extends React.Component {
  render() {
    var createTaskCard = function (data, index){
      return <TaskCard key={index} taskData={data}/>
    }

    return <div className="taskList">
      <div>{this.props.name}</div>
      {this.props.tasks.map(createTaskCard)}
    </div>;
  }

}
