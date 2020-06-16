import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks} from './apiFile';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteOneTask: false,
            getNewTask: '',
            createOne: ''
        };
        // this.createNewTask = this.createNewTask.bind(this);
        // this.getNewTask = this.getNewTask.bind(this);
    }
    render () {
    return (
        <div className='wapper'>
            <div className='wrap'>
                <div className= 'hiHeader'>Ну привет, Женя!</div>
                <div className= 'mainCode'>
                    <div className='divWithSomeInfo'>
                       Здесь будет мой корректно работающий код. Я старательно работаю, чтоб всё получилось нормально. Извини, если чьо.
                    </div>
                    <div className='divWithButtonGetTask'>
                        <button className='getTask' onClick={this.getNewTask}>Get task</button>
                    </div>
                    <div id = 'getTaskDiv'>
                        <span className='apiTitle'>API</span></div>
                </div>
            </div>

        </div>
    )}
}
export default MainPage;