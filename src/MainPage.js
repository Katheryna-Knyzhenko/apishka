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
        this.showTasksList = this.showTasksList.bind(this)
        // this.getNewTask = this.getNewTask.bind(this);
    }
    showTasksList () {
        this.state.tasks.forEach(task => {
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
    createNewTask () {
        createTask('My new task')
            .then(() => getTasks())
            .then((response) => {this.setState({tasks: response})})
            .then(() => {this.showTasksList()})
    }

    render () {
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
                        <span className='apiTitle'>API</span></div>
                </div>
            </div>

        </div>
    )}
}
export default MainPage;