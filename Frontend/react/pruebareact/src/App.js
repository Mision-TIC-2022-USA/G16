import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
function App() {

  let userObj = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      <HelloMessage user={userObj} />
      <TodoApp />
    </>
  );
}

export default App;
