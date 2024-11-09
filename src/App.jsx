import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './styles.css';

function App() {
  return (
    <>
      <div className="top-panel">
        <span className="panel-text">MyContexts</span>
      </div>
      <Container className="main-content">
        <h1>Welkom bij MyContexts</h1>
        <p>Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld. 
          Daarin kan je samen met anderen veilig gebruikmaken van de Apps in onze App Stores. <br></br> 
          Misschien wil je eerst meer weten over MyContexts voordat je del gaat nemen. 
          Als dat zo is t zo is ga dan eerst naar onze FAQ's
        </p>
        <button className="wide-button">
          Ja ik wil graag deel uitmaken van de MyContext wereld
        </button>
      </Container>
    </>
  );
}

export default App; 