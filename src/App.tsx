import React, { useState, ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

interface PanelProps {
  onClose: () => void;
}

const Panel: React.FC<PanelProps> = ({ onClose }): ReactElement => {
  return (
    <div className="sliding-panel">
      <div className="panel-content">
        <div className="panel-header">
          <h2>MyContexts FAQ's</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close panel"
          >
            ×
          </button>
        </div>
        <div className="panel-body">
          {/* Hier komt de FAQ content */}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = (): ReactElement => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  return (
    <>
      <div className="top-panel">
        <span className="panel-text">Welkom bij My Contexts</span>
      </div>
      <Container className="main-content">
        <h1>Welkom bij My Contexts</h1>
        <p><p>Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld. 
          Daarin kan je samen met anderen veilig gebruikmaken van de Apps in onze App Stores. <br></br> 
          Misschien wil je eerst meer weten over MyContexts voordat je del gaat nemen. 
          Als dat zo is t zo is ga dan eerst naar onze FAQ's
        </p></p>
        <button 
          className="wide-button faq-button"
          onClick={() => setShowPanel(true)}
          type="button"
        >
          MyContexts FAQ's
        </button>
        <button 
          className="wide-button"
          type="button"
        >
          Installeer MyContexts
        </button>
      </Container>

      {showPanel && <Panel onClose={() => setShowPanel(false)} />}
    </>
  );
};

export default App; 