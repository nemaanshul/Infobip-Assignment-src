import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import dataModel from './dataModel';
ReactDOM.render(
  <App items={dataModel.data}/>,
  document.getElementById('root')
);
