import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks} from './apiFile';

class ApishkaMainCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteOneTask: false,
      getNewTask: false,
      createOne: false
    };
    this.createNewTask = this.createNewTask.bind(this);
    this.getNewTask = this.getNewTask.bind(this);
    this.deleteTaskButton = this.deleteTaskButton.bind(this);
  }

  createNewTask = () => {
    this.setState({
      createOne: !this.state.createOne
    });
    createTask('First taska')
  };
  getNewTask = () => {
    this.setState({
      getNewTask: !this.state.getNewTask
    });
    getTasks()
  };
  deleteTaskButton = (tasks) => {
    this.setState({
      deleteOneTask: !this.state.deleteOneTask
    });
    deleteTask('29588e06-42bd-40ff-b885-9698f663770c')
  };
//   tasks.forEach(task => {
//   deleteTask(task.id)
// })
  render() {

    return (
        <div className='wapper'>
          <div className='wrap'>
            <div className= 'hiHeader'>Ну привет, Женя!</div>
            <div className= 'mainCode'>
              <div className='divWithButtonCreateTask'>
              <button className='createTask' onClick={this.createNewTask}>Create task</button>
              </div>
              <div className='divWithButtonCetTask'>
              <button className='getTask' onClick={this.getNewTask}>Get task</button>
            </div>
              <div className='divWithButtonDeleteTask'>
                <button className='deleteTask' onClick={this.deleteTaskButton}>Delete task</button>
              </div>
            </div>
          </div>

        </div>
    )
  }
}
export default ApishkaMainCode;