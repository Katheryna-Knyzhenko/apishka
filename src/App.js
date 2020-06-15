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
    }
    this.createNewTask = this.createNewTask.bind(this);
  }

    createNewTask () {

}
  render() {
    this.createNewTask = () => {
      this.setState({
        createOne: !this.state.createOne
      })
    };
    if (this.state.createOne === true) {
      this.setState({createOne: !this.state.createOne})
      return alert('правда');
    }


    return (
        <div className='wapper'>
          <div className='wrap'>
            <div className= 'hiHeader'>Ну привет, Женя!</div>
            <div className= 'mainCode'>
              <div className='divWithButtonCreateTask'>
              <button className='createTask' onClick={this.createNewTask}>Create task</button>
              </div>
              <div className='divWithButtonCetTask'>
              <button className='getTask'>Get task</button>
            </div>
              <div className='divWithButtonDeleteTask'>
                <button className='deleteTask'>Delete task</button>
              </div>
            </div>
          </div>

        </div>
    )
  }
}
export default ApishkaMainCode;