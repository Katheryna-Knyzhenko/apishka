import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks} from './apiFile';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
        this.createNewTask = this.createNewTask.bind(this);

    }


    createNewTask () {
        createTask('My new task')
            .then(() => getTasks()
                .then((response) => {this.setState({tasks: response.data})}))
    }

    render () {

                   const mapping  =  this.state.tasks.map((task) =>
                           <li key='task.id' className='taskList'>{task.title} {task.id}
                           <button id='deleteTaskBut'>delete task</button></li>
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
                        <button className='getTask' onClick={this.createNewTask}>Create task</button>

                    </div>
                    <div id = 'getTaskDiv'>
                        <span className='apiTitle'>API</span>{mapping}</div>
                </div>
            </div>

        </div>
    )}
}
export default MainPage;