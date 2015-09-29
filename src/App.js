import React from 'react';
import TaskList from './TaskList';
import { Statuses } from "./constants";

export default class App extends React.Component {
  render() {
    let tasks = this.props.tasks;

    var createTaskList = function (status){
      return <TaskList name={titleForStatus(status)} tasks={tasks.filter(t => t.status=status)}/>
    }

    return <div className="kanbanBoard">
      <h1>Redux Kanban Board</h1>
      {createTaskList(Statuses.NOT_STARTED)}
      {createTaskList(Statuses.IN_PROGRESS)}
      {createTaskList(Statuses.DONE)}
    </div>;
  }
}

function titleForStatus(status) {
  switch (status) {
    case Statuses.NOT_STARTED: return "Backlog";
    case Statuses.IN_PROGRESS: return "Working";
    case Statuses.DONE: return "Done";
  }
}
