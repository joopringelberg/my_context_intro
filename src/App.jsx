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
        <h1>Welkom bij My Contexts</h1>
        <p>Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld. </p>
        <button className="wide-button">
          Ja ik wil graag deel uitmaken van de MyContext wereld
        </button>
      </Container>
    </>
  );
}

export default App; 