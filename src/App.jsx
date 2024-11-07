import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './styles.css';

function App() {
  return (
    <>
      <div className="top-panel">
        <span className="panel-text">Welkom bij My Contexts</span>
      </div>
      <Container className="main-content">
        <h1>Welkom bij My Contexts</h1>
        <p>Dit is een voorbeeld pagina met wat basis content.</p>
      </Container>
    </>
  );
}

export default App; 