import React, {Component} from 'react';
import './App.css';

class ApishkaMainCode extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className='wapper'>
          <div className='wrap'>
            <div className= 'hiHeader'>Ну привет, Женя!</div>
            <div className= 'mainCode'>
              <div className='divWithButtonCreateTask'>
              <button className='createTask'>Create task</button>
              </div>
            </div>
          </div>

        </div>
    )
  }
}
export default ApishkaMainCode;