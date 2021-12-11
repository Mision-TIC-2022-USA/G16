import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
import { Datacontext } from './componentes/DataContext';
import { useState } from 'react';
function App() {

  let userObj = {
    nombre: 'Juan',
    apellido: 'Perez'
  }
  
  const [user,setUser] = useState(userObj);

  return (
    <>
      <Datacontext.Provider value ={{user,setUser}}>
        <HelloMessage />
        <TodoApp />
        <ClassTimer />
        <FunctionTimer />
      </Datacontext.Provider>
    </>
  );
}

export default App;
