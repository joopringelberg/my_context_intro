import React, { useState, ReactElement } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

interface PanelProps {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = ({ onClose, title, children }): ReactElement => {
  return (
    <div className="sliding-panel">
      <div className="panel-content">
        <div className="panel-header">
          <h2>{title}</h2>
          <button 
            className="close-button" 
            onClick={onClose}
            aria-label="Close panel"
          >
            ×
          </button>
        </div>
        <div className="panel-body">
          {children}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = (): ReactElement => {
  const [showFAQPanel, setShowFAQPanel] = useState<boolean>(false);
  const [showInstallPanel, setShowInstallPanel] = useState<boolean>(false);

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
          onClick={() => setShowFAQPanel(true)}
          type="button"
        >
          MyContexts FAQ's
        </button>
        <button 
          className="wide-button"
          onClick={() => setShowInstallPanel(true)}
          type="button"
        >
          Installeer MyContexts
        </button>
      </Container>

      {showFAQPanel && 
        <Panel 
          onClose={() => setShowFAQPanel(false)} 
          title="MyContexts FAQ's"
        >
          <div className="panel-body">
            <h3>Veelgestelde vragen</h3>
            <p>Hier komen de FAQ's...</p>
          </div>
        </Panel>
      }
      
      {showInstallPanel && 
        <Panel 
          onClose={() => setShowInstallPanel(false)} 
          title="Installeer MyContexts"
        >
          <div className="panel-body">
            <h3>Installatie stappen</h3>
            <p>Hier komen de installatie instructies...</p>
          </div>
        </Panel>
      }
    </>
  );
};

export default App;