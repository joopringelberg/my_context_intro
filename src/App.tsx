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
  const [advancedInstall, setAdvancedInstall] = useState<boolean>(false);
  const [deviceName, setDeviceName] = useState<string>('');
  const [notFirstMyContexts, setNotFirstMyContexts] = useState<boolean>(false);
  // const [identityFile, setIdentityFile] = useState<File | null>(null);
  const [useOwnDatabase, setUseOwnDatabase] = useState<boolean>(false);
  const [useOwnKey, setUseOwnKey] = useState<boolean>(false);
  const [dbUrl, setDbUrl] = useState<string>('');
  const [dbPort, setDbPort] = useState<string>('');
  const [dbUsername, setDbUsername] = useState<string>('');
  const [dbPassword, setDbPassword] = useState<string>('');
  // const [keyFile, setKeyFile] = useState<File | null>(null);

  const handleInstall = () => {
    // Hier komt de installatie logica
    console.log('Start installatie proces');
  };

  return (
    <>
      <div className="top-panel">
        <span className="panel-text">Welkom bij My Contexts</span>
      </div>
      <Container className="main-content">
        <h1>Welkom bij My Contexts</h1>
        <p><p>Je staat op het punt om onderdeel uit te gaan maken van de MyContext wereld. 
          Daarin kan je samen met anderen veilig gebruikmaken van de Apps in onze App Stores. <br></br> 
          Misschien wil je eerst meer weten over MyContexts voordat je deel gaat nemen. 
          Als dat zo is ga dan eerst naar onze FAQ's
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
                  <summary>Wat kan ik met MyContexts doen?</summary>
                  <p>Met MyContexts kun je veilig contexten maken waarin je samen met anderen 
                    gegevens kunt delen voor werk, voor thuis, voor leuke dingen en veel meer.
                    Je kunt gratis Apps kiezen uit de MyContexts App Stores. 
                    Daarmee bepaal je zelf de soort contexten die je wilt gebruiken en met wie je 
                    die contexten wilt delen.
                    </p>
                </details>
              <details>
                  <summary>Hoe werkt MyContexts?</summary>
                  <p>MyContexts Apps worden op een speciale manier gemaakt. 
                    Bij MyContexts hoort een taal die in termen van Contexten, Rollen en Perspectieven
                    (Gebruikerrollen hebben Perspectieven op andere Gebruikerrollen en 
                    Dingrollen) een toepassing vormgeeft. 
                    Op basis hiervan rekenen we uit welke gebruikers in een Context
                    welke gegevens moet krijgen om zijn of haar rol in een Context te spelen. 
                    Vervolgens sturen we die gegevens naar de devices van die gebruikers.
                    Zoals gezegd, geen servers die je gegevens opslaan.
                    Dus niet via een Server.</p>
                </details>
                <details>
                  <summary>Waarom is MyContext veilig?</summary>
                  <p>MyContexts werkt zonder servers. 
                    Servers die kunnen worden gehackt waardoor je gegevens op straat komen te liggen.
                    Servers van bedrijven die aan de haal gaan met je gegevens en er veel aan verdienen.
                    Geen Server geen problemen met je privacy </p>
                </details>
                <details>
                  <summary>Waarom is MyContexts duurzaam?</summary>
                  <p>Geen servers betekent geen Datacenters die energie slurpen 
                    en het landschap vervuilen. 
                  </p>
                </details>
                <details>
                  <summary>Wat is het verschil met bijvoorbeeld WhatsApp?</summary>
                  <p>Om te beginnen is MyContext niet een App, maar een taal en een platform.
                  In WhatsApp draait het om Chats. 
                  Iedere Context in MyContexts heeft standaard een Chat maar ook gegevens en andere Contexten waar je heen kan gaan. 
                  We noemen dit de Wie-Wat-Waar opzet. Wie doen er allemaal mee in een Context?, 
                  Wat voor gegevens zijn er in de Context waar je samen aan kunt werken en 
                  Waar kun je naar allemaal naar toe. 
                  We denken dan ook dat WWW binnenkort niet meer staat voor World Wide Web maar voor Wie Wat Waar :-)
                  </p>
                </details>
                <details>
                  <summary>Waarom kost MyConexts zo weinig?</summary>
                  <p>Omdat wij geen centrale sewrver hebben 
                    en je alleen je eigen apparaten gebruikt om gegevens op te slaan en te verwerken 
                    maken we bijna geen kosten. Daarom is 2 Euro per maand of een tientje per jaar voldoende.
                  </p>
                </details>
                <details>
                  <summary>Stel mijn smartphone gaat kapot. Ben ik dan alles kwijt?</summary>
                  <p>Nee, we hebben meerdere mechanismen ontworpen om je gegevens te herstellen
                    ook al doet je smartphone het niet meer. Meerdere Contexties dienen als een back-up 
                    voor je data. Voer een code in op de MyContexts website, een code die je van ons krijgt
                    wanneer je mee gaat doen en we herstellen je data op een ander apparaat. 
                  </p>
                </details>
                <details>
                  <summary>Werkt MyContexts ook op mijn andere apparaten?</summary>
                  <p>Ja, je lkunt net zoveel apparaten met MyContexts gebruiken. Wij zorgen ervoor dat 
                    je gegevens en apps tussen je apparaten gesynced worden. 
                  </p>
                </details>
                <details>
                  <summary>Kan ik ook zelf MyContexts Apps maken?</summary>
                  <p>Vooralsnog maken wij de Apps maar over niet al te lange tijd 
                    publiceren we de taal en de tools om dit zelf te kunnen. Je zult dan zien 
                    dat Apps maken voor MyContexts erg eenvoudig is.
                  </p>
                </details>
                <details>
                  <summary>Wie heeft MyContexts gemaakt?</summary>
                  <p>MyContext is het resultaat van meer dan zeven jaar noeste arbeid 
                  van Joop Ringelberg en Cor Baars. Beide Cognitie Wetenschappers en ervaren IT-ers</p>
                </details>
                <details>
                  <summary>Waarom is dit nooit eerder gedaan?</summary>
                  <p>Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen
                    dit geen goed idee vinden en hier niet in investeren. 
                    Verder is het, ondanks de eenvoud van het idee, erg complex om te maken
                    We hebben er niet voor niets meer dan zeven jaar aan gewerkt.
                  </p>
                </details>
                <details>
                  <summary>Waar kan ik meer informatie vinden over MyContexts?</summary>
                  <p>Je begrijpt dat bedrijven die je naar hun servers lokken om daar geld aan te verdienen
                    dit geen goed idee vinden en hier niet in investeren. 
                    Verder is het, ondanks de eenvoud van het idee, erg complex om te maken
                    We hebben er niet voor niets meer dan zeven jaar aan gewerkt.
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
            <div className="input-container">
              <label htmlFor="deviceName">De naam voor het apparaat waarop je installeert:</label>
              <input 
               type="text"
                id="deviceName"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
              />
            </div>

            <div className="switch-container">
              <label className="switch">
                <input 
                  type="checkbox"
                  onChange={(e) => setNotFirstMyContexts(e.target.checked)}
                  checked={notFirstMyContexts}
                />
                <span className="slider round"></span>
              </label>
              <span className="switch-label">
                Niet mijn eerste installatie
                <button 
                  className="question-button" 
                  title="Als dit niet je eerste MyContext installatie is moet je een identity file uploaden. Daarmee zorgen we ervoor dat de gegevens tussen je verschillende apparaten worden gesynchroniseerd."
                >
                  ?
                </button>
              </span>
            </div>

            {notFirstMyContexts && (
              <div className="file-uploads">
                <div className="file-upload-container">
                  <label htmlFor="identityFile">Upload de identity file:</label>
                  <input
                    type="file"
                    id="identityFile"
                    accept=".id"
                    // onChange={(e) => setIdentityFile(e.target.files?.[0] || null)}
                  />
                </div>
              </div>
            )}

            <div className="switch-container" style={{ marginTop: '30px' }}>
              <label className="switch">
                <input 
                  type="checkbox"
                  onChange={(e) => setAdvancedInstall(e.target.checked)}
                  checked={advancedInstall}
                />
                <span className="slider round"></span>
              </label>
              <span className="switch-label">
                Geavanceerde installatie
                <button 
                  className="question-button" 
                  title="Wanneer je je eigen database voor MyContexts wilt gebruiken of je je wilt je eigen cryptografische sleutel gebruiken zet dan geavanceerde installatie aan."
                >
                  ?
                </button>
              </span>
            </div>
            
            <button 
              className="wide-button"
              onClick={() => handleInstall()}
            >
              Installeer MyContexts
            </button>
          </div>
        </Panel>
      }

      {advancedInstall && 
        <Panel 
          onClose={() => setAdvancedInstall(false)} 
          title="Geavanceerde installatie MyContexts"
        >
          <div className="panel-body">
            <div className="switch-container">
              <label className="switch">
                <input 
                  type="checkbox"
                  onChange={(e) => setUseOwnDatabase(e.target.checked)}
                  checked={useOwnDatabase}
                />
                <span className="slider round"></span>
              </label>
              <span className="switch-label">
                Ik wil mijn eigen database gebruiken
                <button 
                  className="question-button" 
                  title="Als je je eigen database wilt gebruiken moet je een aantal gegevens opgeven."
                >
                  ?
                </button>
              </span>
            </div>

            {useOwnDatabase && (
              <div className="database-inputs">
                <div className="input-container">
                  <label htmlFor="dbUrl">Database URL:</label>
                  <input 
                    type="text"
                    id="dbUrl"
                    value={dbUrl}
                    onChange={(e) => setDbUrl(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="dbPort">Poort:</label>
                  <input 
                    type="text"
                    id="dbPort"
                    value={dbPort}
                    onChange={(e) => setDbPort(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="dbUsername">Username:</label>
                  <input 
                    type="text"
                    id="dbUsername"
                    value={dbUsername}
                    onChange={(e) => setDbUsername(e.target.value)}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="dbPassword">Password:</label>
                  <input 
                    type="text"
                    id="dbPassword"
                    value={dbPassword}
                    onChange={(e) => setDbPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="switch-container" style={{ marginTop: '20px' }}>
              <label className="switch">
                <input 
                  type="checkbox"
                  onChange={(e) => setUseOwnKey(e.target.checked)}
                  checked={useOwnKey}
                />
                <span className="slider round"></span>
              </label>
              <span className="switch-label">
                Ik wil mijn eigen sleutel gebruiken
                <button 
                  className="question-button" 
                  title="Als je je eigen cryptografische sleutel wilt gebruiken moet je die uploaden."
                >
                  ?
                </button>
              </span>
            </div>

            {useOwnKey && (
              <div className="file-upload-container">
                <label htmlFor="keyFile">Upload nu het sleutel bestand:</label>
                <input
                  type="file"
                  id="keyFile"
                  accept=".key,.pem"
                  // onChange={(e) => setKeyFile(e.target.files?.[0] || null)}
                />
              </div>
            )}

            <button 
              className="wide-button"
              onClick={() => handleInstall()}
            >
              Installeer MyContexts
            </button>
          </div>
        </Panel>
      }
    </>
  );
};

export default App;