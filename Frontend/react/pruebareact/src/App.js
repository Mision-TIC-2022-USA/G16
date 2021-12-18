import logo from './logo.svg';
import './App.css';
import HelloMessage from './componentes/HelloMessage';
import TodoApp from './componentes/TodoApp';
import ClassTimer from './componentes/ClassTimer';
import FunctionTimer from './componentes/FunctionTimer';
import { Datacontext } from './componentes/DataContext';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import  CreatePersona  from './componentes/CreatePersona';
import Login  from './componentes/Login';
function App() {

  let userObj = {
    nombre: 'Juan',
    apellido: 'Perez'
  }

  const [user, setUser] = useState(userObj);

  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="HelloMessage">HelloMessage</Nav.Link>
                <Nav.Link as={Link} to="TodoApp">TodoApp</Nav.Link>
                <Nav.Link as={Link} to="ClassTimer">ClassTimer</Nav.Link>
                <Nav.Link as={Link} to="FunctionTimer">FunctionTimer</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Datacontext.Provider value={{ user, setUser }}>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="HelloMessage" element={<HelloMessage />} />
            <Route path="TodoApp" element={<TodoApp />} />
            <Route path="ClassTimer" element={<ClassTimer />} />
            <Route path="FunctionTimer" element={<FunctionTimer />} />
            <Route path="/persona/create/:idpersona" element={<CreatePersona />} />
          </Routes>
        </Datacontext.Provider>
      </Router>
    </>
  );
}

export default App;
