import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
function App() {

  let userObj = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  return (
    <>
      <HelloMessage user={userObj} />
      {/* <HelloMessage nombre="Mario" />
      <HelloMessage nombre="Sofia" /> */}
    </>
  );
}

export default App;
