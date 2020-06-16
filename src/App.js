import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks} from './apiFile';

class ApishkaMainCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteOneTask: false,
      getNewTask: '',
      createOne: ''
    };
    this.createNewTask = this.createNewTask.bind(this);
    this.getNewTask = this.getNewTask.bind(this);
    // this.deleteTaskButton = this.deleteTaskButton.bind(this);
  }

  createNewTask = () => {
    this.setState({
      createOne: createTask('First taska').createNewTask

    });

  };
  getNewTask = () => {
     this.setState({
      getNewTask: getTasks()
      .then(() => function onTasksRecieved(tasks) {
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.innerHTML = `${task.title}        ${task.id}`;
          li.id = task.id;
          document.body.appendChild(li)
        })
      })
    });


  };
  // deleteTaskButton = (tasks) => {
  //   tasks.forEach(task => {
  //     this.setState({
  //       deleteOneTask: deleteTask(task.id)
  //     });
  //   })
  // };
  // tasks.map(function(task) {
  //   return  deleteTask(task.id)
  // }) function onTasksRecieved (tasks) {
  //
  //         const result = document.querySelector("#tasks-result");
  //         result.innerHTML = '';
  //
  //         tasks.forEach(task => {
  //             const li = document.createElement('li');
  //             li.innerHTML = `${task.title}        ${task.id}`;
  //             li.id = task.id;
  //             result.appendChild(li);
  //             const buttonDelete = document.createElement('button');
  //             buttonDelete.innerHTML = 'delete task';
  //             buttonDelete.id = 'delete-task';
  //             buttonDelete.addEventListener('click', () => { deleteTasks(task.id); li.remove()} );
  //             li.appendChild(buttonDelete);
  //
  //         });
  //         createTasks('FirstTask2');
  //     }
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