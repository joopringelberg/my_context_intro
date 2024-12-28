// React Bootstrap App for Wie Wat Waar UI

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Home() {
  return (
    <Container className="mt-5">
      <h1 className="text-primary">Wie Wat Waar Gebruikersinterface</h1>
      <Row className="mt-4">
        <Col><Wie /></Col>
        <Col><Wat /></Col>
        <Col><Waar /></Col>
      </Row>
    </Container>
  );
}

function Incidentrapport() {
  const incidentDetails = {
    "Incidentnummer": "12345",
    "Status": "Open",
    "Datum Gemeld": "10-12-2024",
    "Tijd": "14:35",
    "Locatie": "Straat 123, Amsterdam",
    "Beschrijving": "Bestuurder reed door rood licht en veroorzaakte een bijna-ongeval.",
    "Melder Naam": "Jan Jansen",
    "Melder Contact": "+31 6 1234 5678",
    "Toegewezen Agent": "Politieagent: Jan Jansen"
  };

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Incidentrapport</h2>
      <ListGroup variant="flush">
        {Object.entries(incidentDetails).map(([key, value], index) => (
          <ListGroup.Item key={index} className="border-primary"><strong>{key}:</strong> {value}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

function Incidentlogboek() {
  const logEntries = [
    { tijd: "14:30", actie: "Melding ontvangen" },
    { tijd: "14:35", actie: "Incident toegewezen aan politieagent" },
    { tijd: "14:40", actie: "Politieagent ter plaatse" },
    { tijd: "14:45", actie: "Incident in behandeling" }
  ];

  return (
    <Container className="mt-5">
      <h2 className="text-primary">Incidentlogboek</h2>
      <ListGroup variant="flush">
        {logEntries.map((entry, index) => (
          <ListGroup.Item key={index} className="border-primary"><strong>{entry.tijd}:</strong> {entry.actie}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

function Wie() {
  const roles = ["Centralist: Peter van Dam", "Meldkamer Supervisor", "Incidentcoördinator"];
  return (
    <Card className="border-primary">
      <Card.Header className="bg-primary text-white">Wie</Card.Header>
      <ListGroup variant="flush">
        {roles.map((role, index) => (
          <ListGroup.Item key={index}>{role}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

function Wat() {
  const things = ["Incidentrapport", "Incidentlogboek", "CommunicatieLog", "StatusOverzicht"];
  return (
    <Card className="border-primary">
      <Card.Header className="bg-primary text-white">Wat</Card.Header>
      <ListGroup variant="flush">
        {things.map((thing, index) => (
          <ListGroup.Item key={index} action as={Link} to={thing === "Incidentrapport" ? "/incidentrapport" : thing === "Incidentlogboek" ? "/incidentlogboek" : "#"}>{thing}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

function Waar() {
  const contexts = ["IncidentbeheerSysteem", "Communicatiesysteem", "Meldkamersysteem"];
  return (
    <Card className="border-primary">
      <Card.Header className="bg-primary text-white">Waar</Card.Header>
      <ListGroup variant="flush">
        {contexts.map((context, index) => (
          <ListGroup.Item key={index}>{context}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}

function App() {
  return (
    <Router>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Wie Wat Waar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wie" element={<Wie />} />
          <Route path="/wat" element={<Wat />} />
          <Route path="/waar" element={<Waar />} />
          <Route path="/incidentrapport" element={<Incidentrapport />} />
          <Route path="/incidentlogboek" element={<Incidentlogboek />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
