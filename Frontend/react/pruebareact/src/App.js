import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
function App() {

  let userObj = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      <HelloMessage user={userObj} />
      <TodoApp />
      <ClassTimer/>
      <FunctionTimer/>
    </>
  );
}

export default App;
