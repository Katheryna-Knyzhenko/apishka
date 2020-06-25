import React, {Component} from 'react';
import './App.css';
import {createTask, deleteTask, getTasks, updateTasks} from './apiFile';
import $ from 'jquery';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisabled: false,
            isOpenInputField: false,
            selectedTaskId: null,
            inputValue: ''
        };
        this.createNewTask = this.createNewTask.bind(this);
        this.deleteOneTask = this.deleteOneTask.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.editTask = this.editTask.bind(this)
        this.changeTaskName = this.changeTaskName.bind(this)
    }

    componentDidMount() {
        getTasks()
            .then((response) => {
                this.setState({tasks: response.data})
            })
    }

    editTask(id) {
        var taskChangedByInput = this.state.inputValue;
        this.setState({selectedTaskId: id, inputValue: ''})
        if (this.state.selectedTaskId === id) {
            this.setState({isOpenInputField: true})
        }

        updateTasks(taskChangedByInput, id, "true").then((response) => {
            return response.data
        }).then(() => getTasks().then((response) => {
            this.setState({tasks: response.data, isOpenInputField: false})
        }))
    }

    createNewTask() {
        this.setState({isDisabled: true});
        createTask(`My ${this.state.tasks.length + 1}task`)
            .then(() => getTasks()
                .then((response) => {
                    this.setState({tasks: response.data, isDisabled: false})
                }))
    }

    deleteOneTask(id) {
        deleteTask(id).then(() => getTasks().then((response) => {
            this.setState({tasks: response.data})
        }))
    }

    deleteAll() {
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

    changeTaskName(event) {
        event.preventDefault();
        this.setState({inputValue: event.target.value})


    }


    render() {

        const mapping = this.state.tasks.map((task) =>
            <li key='task.id' className='taskList'>{task.title} {task.id}
                <input value={this.state.inputValue} onChange={this.changeTaskName}
                       hidden={!this.state.isOpenInputField && this.state.selectedTaskId !== task.id}>

                </input>
                <button id='deleteTaskBut' onClick={() => {
                    this.deleteOneTask(task.id)
                }}>delete task
                </button>
                <button id='editTask' onClick={() => {
                    this.editTask(task.id)
                }}>edit task
                </button>

            </li>);

        // if (this.state.inputField) {
        //     var input = <input>Rename task</input>
        // }

        return (


            <div className='wapper'>
                <div className='wrap'>
                    <div className='hiHeader'>Ну привет, Женя!</div>
                    <div className='mainCode'>
                        <div className='divWithSomeInfo'>
                            Здесь будет мой корректно работающий код. Я старательно работаю, чтобы всё получилось
                            нормально. Извини, если чьо.
                        </div>
                        <div className='divWithButtonGetTask'>
                            <button className='getTask' onClick={this.createNewTask}
                                    disabled={this.state.isDisabled}>Create task
                            </button>
                            <button className='deleteAllTasks' onClick={this.deleteAll}>delete all</button>
                        </div>
                        <div id='getTaskDiv'>
                            <span className='apiTitle'>API</span>{mapping}</div>
                    </div>

                </div>

            </div>
        )
    }
}

export default MainPage;