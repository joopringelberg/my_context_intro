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
          <ul>
              
                <details>
                  <summary>Waarom is MyContext veilig?</summary>
                  <p>MyContexts werkt zonder servers. 
                    Servers die kunnen worden gehackt waardoor je gegevens op straat komen te liggen.
                    Servers van bedrijven die aan de haal gaan met je gegevens en er veel aan verdienen.
                    Geen Server geen problemen met je privacy </p>
                </details>
                <details>
                  <summary>Hoe werkt MyContexts?</summary>
                  <p>MyContexts applicaties worden op een speciale manier gemaakt. 
                    Bij MyContexts hoort een taal die in termen van Contexten, Rollen en Perspectieven
                    (Gebruikerrollen hebben Perspectieven op andere Gebruikerrollen en 
                    Dingrollen) een toepassing vormgeeft. 
                    Op basis hiervan rekenen we uit welke gebruikers in een Context
                    welke gegevens moet krijgen om zijn of haar rol in een Context te spelen. 
                    Vervolgens sturen we die gegevens rechtstreeks naar de devices van die gebruikers. 
                    Dus niet via een Server.</p>
                </details>
                <details>
                  <summary>Wat is het verschil met bijvoorbeeld WhatApp?</summary>
                  <p>Om te beginnen is MyContext niet een App, maar een taal en een platform.
                  In WhatsApp draat het om Chats. 
                  Iedere Contexts in MyContexts heeft standaard een Chat maar ook gegevens en andere Contexten waar je heen kan gaan. 
                  We noemen dit de Wie-Wat-Waar opzet. Wie doen er allemaal mee in een Context, 
                  Wat voor gegevens zijn er in de Context waar je samen aan kuntwerken en 
                  Waar kun je naar allemaal naar toe. 
                  We denken dan ook dat WWW binnenkort niet meer staat voor World Wide Web maar voor Wie Wat Waar.
                  </p>
                </details>
            </ul>
          </div>
        </Panel>
      }
      
      {showInstallPanel && 
        <Panel 
          onClose={() => setShowInstallPanel(false)} 
          title="Installeer MyContexts"
        >
          <div className="panel-body">
            <ul>
              <li><a href="#">Waarom is MyContext veilig</a></li>
              <li><a href="#">noot</a></li>
            </ul>
          </div>
        </Panel>
      }
    </>
  );
};

export default App;