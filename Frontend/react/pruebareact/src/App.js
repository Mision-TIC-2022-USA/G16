import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
function App() {
  return (
    <>
      <HelloMessage nombre="Angel" />
      <HelloMessage nombre="Mario" />
      <HelloMessage nombre="Sofia" />
    </>
  );
}

export default App;
