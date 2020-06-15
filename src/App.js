import React, {Component} from 'react';
import './App.css';

class ApishkaMainCode extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const axios = require('axios');
    function getTasks () {
      const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=7737&count=6`);

      return promise.then((response) => {return response.data});
    }
    function createTasks (title) {
      const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
        widgetId:7737,
        title:title
      });

      return promise.then((response) => {
        return response.data});
    }
    return (
        <div className='wapper'>
          <div className='wrap'>
            <div className= 'hiHeader'>Ну привет, Женя!</div>
            <div className= 'mainCode'>
              <div className='divWithButtonCreateTask'>
              <button className='createTask'>Create task</button>
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