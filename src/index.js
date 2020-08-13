import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let list1 = {
  id: 0,
  title: 'Phone Features',
  cards: [
    {
      id: 0,
      title: 'Subwoofer'
    },
    {
      id: 1,
      title: 'Non-porous, washable'
    },
    {
      id: 2,
      title: 'Wings'
    },
    {
      id: 3,
      title: 'Beveled Bezel'
    },
    {
      id: 4,
      title: 'Bezeled Bevel'
    },
    {
      id: 5,
      title: 'Seedless'
    }
  ]
};

let list2 = {
  id: 1,
  title: 'Lyrics',
  cards: [
    {
      id: 0,
      title: 'This was a triumph'
    },
    {
      id: 1,
      title: "I'm making a note here"
    },
    {
      id: 2,
      title: 'HUGE SUCCESS'
    },
    {
      id: 3,
      title: "It's hard to overstate my satisfaction"
    }
  ]
};

let board = {
  title: 'A Demo',
  lists: [list1,list2]
};

ReactDOM.render(
  <React.StrictMode>
    <App board={board} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
