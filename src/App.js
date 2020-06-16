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
  }

  createNewTask = () => {
    this.setState({
      createOne: createTask('First taska')

    });

  };

  getNewTask = () => {
    let tasksRecieved = function onTasksRecieved(tasks) {
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `${task.title}        ${task.id}`;
            li.id = task.id;
            document.getElementById('getTaskDiv').appendChild(li);
            const buttonDelete = document.createElement('button');
            buttonDelete.innerHTML = 'delete task';
            buttonDelete.id = 'delete-task';
            buttonDelete.style.marginLeft = '2em';
            buttonDelete.style.marginTop = '2em';
            buttonDelete.addEventListener('click', () => { deleteTask(task.id); li.remove()} );
            li.appendChild(buttonDelete);
        })
     }
      const promise = new Promise( function (resolve, reject) {
        resolve(getTasks())
      })
      promise.then(function (result) {
        tasksRecieved(result)
      })

  }

  deleteTaskButton = (tasks) => {
    tasks.forEach(task => {
      this.setState({
        deleteOneTask: deleteTask(task.id)
      });
    })
  };

  render() {

    return (
        <div className='wapper'>
          <div className='wrap'>
            <div className= 'hiHeader'>Ну привет, Женя!</div>
            <div className= 'mainCode'>
              <div className='divWithButtonCreateTask'>
              <button className='createTask' onClick={this.createNewTask}>Create task</button>
              </div>
              <div className='divWithButtonGetTask'>
              <button className='getTask' onClick={this.getNewTask}>Get task</button>
            </div>
                <div id = 'getTaskDiv'>
                    <span className='apiTitle'>API</span></div>
            </div>
          </div>

        </div>
    )
  }
}
export default ApishkaMainCode;