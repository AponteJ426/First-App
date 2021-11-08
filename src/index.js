import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './counterApp';
import './index.css';


ReactDOM.render(<CounterApp value ={0}/>,
  document.getElementById('root')
);

