import React from 'react';
import './App.css';
import List from "./List"

const App = ({ board }) => {

  const { title, lists } = board;
  
  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="board-lists">
        {lists.map(list => <List key={list.id} list={list} />)}
        {console.log(lists[0])}
      </div>
    </div>
  );
}

export default App;
