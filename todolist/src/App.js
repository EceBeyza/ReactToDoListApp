
import './App.css';
import Header from './components/Header/index'
import React, { useState } from 'react';
import TodoList from './components/Todo/Todolist'
import Footer from './components/Footer';
function App() {
  // !! Header klasörünün içindeki input değerini almak için state oluşturuyoruz;
  const [inputText, setinputText] = useState("")

  const [todos, setTodos] = useState([{
    completed: true,
    text: "Learn JavaScript",
    id: 1
  },
  {
    completed: false,
    text: "Learn React",
    id: 2
  },
  {
    completed: false,
    text: "Have a life!",
    id: 3
  }
]);
  
  const [status, setStatus] = useState("");
  
  return (
    <div className="App">
    <section className="todoapp">

      {/* Yukarıdaki değerleri header klasörüne gönderdik. */}
      <Header
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        
      />
    
      <TodoList
        todos={todos}
        setTodos={setTodos}
        status={status}
       
      />

     <Footer
     todos={todos}
     status={status}
     setStatus={setStatus}
     setTodos={setTodos}/>
    </section>
    
    <footer className="info">
    <p>Click to edit a todo</p>
    <p>Created by <a href="https://d12n.me/">Ece Beyza Nur Özen</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
  </div>

  );
}

export default App;
