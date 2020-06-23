import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks} from './apiFile';
import $ from 'jquery';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisabled: false
        };
        this.createNewTask = this.createNewTask.bind(this);
        this.deleteOneTask =  this.deleteOneTask.bind(this);
        this.deleteAll =  this.deleteAll.bind(this);
        this.editTask =  this.editTask.bind(this)
    }

  componentDidMount() {
      getTasks()
          .then((response) => {this.setState({tasks: response.data} )})
  }
     editTask ()  {
        alert('edit task')
      }
    createNewTask () {
        this.setState({isDisabled: true})
        createTask(`My ${this.state.tasks.length + 1}task`)
            .then(() => getTasks()
                .then((response) => {this.setState({tasks: response.data, isDisabled: false})}))
    }

       deleteOneTask (id) {
        deleteTask(id).then(() => getTasks().then((response) =>
        {this.setState({tasks: response.data})}))
}

         deleteAll () {
         let questionAboutDeleteTasks = prompt('Действительно ли Вы хотите удалить все таски?', 'да');
             if (questionAboutDeleteTasks) {
                 this.state.tasks.map((task) =>
                     deleteTask(task.id)
                 );
                  this.setState({tasks: []})

             }
             // else {
             //     alert('Оно Вам и не надо!')
             // }
}


    render () {

                   const mapping  =  this.state.tasks.map((task) =>
                           <li key='task.id' className='taskList'>{task.title} {task.id}
                           <button id='deleteTaskBut' onClick={() =>
                           {this.deleteOneTask(task.id)}}>delete task</button>
                           <button id='editTask' onClick={() =>
                           {this.editTask(task.id)}}>edit task</button>
                           </li>

                );

    return (

        <div className='wapper'>
            <div className='wrap'>
                <div className= 'hiHeader'>Ну привет, Женя!</div>
                <div className= 'mainCode'>
                    <div className='divWithSomeInfo'>
                         Здесь будет мой корректно работающий код. Я старательно работаю, чтобы всё получилось нормально. Извини, если чьо.
                    </div>
                    <div className='divWithButtonGetTask'>
                        <button className='getTask' onClick={this.createNewTask} disabled={this.state.isDisabled}>Create task</button>
                            <button className='deleteAllTasks' onClick={this.deleteAll}>delete all</button>
                    </div>
                    <div id = 'getTaskDiv'>
                        <span className='apiTitle'>API</span>{mapping}</div>
                </div>

            </div>

        </div>
    )}
}
export default MainPage;