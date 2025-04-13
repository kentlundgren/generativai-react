// Description.jsx - Komponent för att visa teknisk beskrivning av applikationen
import { useState } from 'react';

function Description({ onBack }) {
  // State för att visa/dölja modal-fönstret med mappstruktur
  const [showStructureModal, setShowStructureModal] = useState(false);
  // State för att visa/dölja modal-fönstret med GitHub-information
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  
  // Öppna modal med mappstruktur
  const openStructureModal = () => {
    setShowStructureModal(true);
  };
  
  // Stäng modal
  const closeStructureModal = () => {
    setShowStructureModal(false);
  };

  // Öppna modal med GitHub-information
  const openGitHubModal = () => {
    setShowGitHubModal(true);
  };
  
  // Stäng GitHub-modal
  const closeGitHubModal = () => {
    setShowGitHubModal(false);
  };

  // Funktion för att öppna filen med hjälp av JavaScript (inte längre används)
  const openStructureFile = () => {
    // Försök att öppna filen i ny flik
    window.open('file:///D:/VåraFiler_primära_på_SSD/Kent_dokument/Data/HTML/kentlundgren_se/program/testprogram/detaljerad-mappstruktur.html', '_blank');
    
    // Eftersom direktlänken kanske inte fungerar, visa även instruktioner i en alert
    setTimeout(() => {
      alert(
        "Om sidan inte öppnades automatiskt, kopiera denna sökväg och klistra in i din webbläsare:\n\n" +
        "D:\\VåraFiler_primära_på_SSD\\Kent_dokument\\Data\\HTML\\kentlundgren_se\\program\\testprogram\\detaljerad-mappstruktur.html"
      );
    }, 1000);
  };

  return (
    <div className="description-content">
      <h2>Programbeskrivning: Introduktion till generativ AI</h2>
      
      <div className="description-section">
        <h3>Teknisk beskrivning</h3>
        <p>Detta program är utvecklat med React och Vite:</p>
        <ul>
          <li><strong>React</strong> - Ett JavaScript-bibliotek för att bygga användargränssnitt</li>
          <li><strong>Vite</strong> - Ett modernt byggverktyg för webbutveckling</li>
          <li><strong>JavaScript</strong> - Programmeringsspråket som används</li>
          <li><strong>CSS</strong> - För styling och layout</li>
        </ul>
        
        <h4>Programstruktur</h4>
        <p>Att visualisera programstrukturen i en modern webbapplikation hjälper utvecklare och användare att förstå kodens organisation. När en applikation växer blir det allt viktigare att ha en tydlig översikt.</p>
        
        <div className="structure-link-container">
          <div className="structure-button-container">
            <button 
              className="structure-button" 
              onClick={openStructureModal}
            >
              Visa detaljerad mappstruktur
            </button>
            <button 
              className="structure-button github-button" 
              onClick={openGitHubModal}
            >
              GitHub-integration
            </button>
            <p className="structure-note">Klicka på valfri knapp för att visa detaljerad information om projektets struktur eller GitHub-integration</p>
          </div>
          
          <div className="simple-structure">
            <p><strong>Sammanfattning av huvudmappar:</strong></p>
            <ul>
              <li><strong>node_modules/</strong> - Alla beroenden (installerade paket)</li>
              <li><strong>public/</strong> - Statiska filer</li>
              <li><strong>src/</strong> - Källkodsmapp med React-komponenter</li>
              <li>+ konfigurationsfiler på rotnivå</li>
            </ul>
          </div>
        </div>
        
        {/* Modal för att visa detaljerad mappstruktur */}
        {showStructureModal && (
          <div className="structure-modal-overlay">
            <div className="structure-modal">
              <div className="structure-modal-header">
                <h3>Detaljerad Mappstruktur</h3>
                <button className="close-button" onClick={closeStructureModal}>✕</button>
              </div>
              
              <div className="structure-modal-content">
                <div className="färgkodning">
                  <div className="färgkodning-titel">Färgkodning:</div>
                  <div className="kodning-lista">
                    <div className="kodning-item">
                      <span className="folder"></span> Mappar
                    </div>
                    <div className="kodning-item">
                      <span className="react-component"></span> React-komponenter (.jsx)
                    </div>
                    <div className="kodning-item">
                      <span className="css-file"></span> Stilfiler (.css)
                    </div>
                    <div className="kodning-item">
                      <span className="html-file"></span> HTML & Resursfiler (.html, .svg)
                    </div>
                    <div className="kodning-item">
                      <span className="js-config"></span> JavaScript-konfiguration (.js)
                    </div>
                    <div className="kodning-item">
                      <span className="project-file"></span> Projektfiler (.json, .md, .gitignore)
                    </div>
                  </div>
                </div>
                
                <div className="file-list">
                  <ul>
                    <li className="file-item">
                      <span className="folder"></span>
                      <span className="file-name">generativai-react/</span>
                      <span className="file-description">Projektets rotmapp</span>
                    </li>
                    
                    <li>
                      <ul>
                        <li className="file-item">
                          <span className="folder"></span>
                          <span className="file-name">dist/</span>
                          <span className="file-description">Byggd version av appen redo för publicering</span>
                        </li>
                        
                        <li>
                          <ul>
                            <li className="file-item">
                              <span className="folder"></span>
                              <span className="file-name">assets/</span>
                              <span className="file-description">Kompilerade resurser</span>
                            </li>
                            <li className="file-item">
                              <span className="html-file"></span>
                              <span className="file-name">.htaccess</span>
                              <span className="file-description">Apache-konfiguration för routing</span>
                            </li>
                            <li className="file-item">
                              <span className="html-file"></span>
                              <span className="file-name">index.html</span>
                              <span className="file-description">Byggd HTML-fil</span>
                            </li>
                            <li className="file-item">
                              <span className="html-file"></span>
                              <span className="file-name">vite.svg</span>
                              <span className="file-description">Vite logotyp</span>
                            </li>
                          </ul>
                        </li>
                        
                        <li className="file-item">
                          <span className="folder"></span>
                          <span className="file-name">node_modules/</span>
                          <span className="file-description">Installerade npm-paket och beroenden</span>
                        </li>
                        
                        <li className="file-item">
                          <span className="folder"></span>
                          <span className="file-name">public/</span>
                          <span className="file-description">Statiska filer som kopieras direkt till build</span>
                        </li>
                        
                        <li>
                          <ul>
                            <li className="file-item">
                              <span className="html-file"></span>
                              <span className="file-name">.htaccess</span>
                              <span className="file-description">Apache-konfiguration för routing</span>
                            </li>
                            <li className="file-item">
                              <span className="html-file"></span>
                              <span className="file-name">vite.svg</span>
                              <span className="file-description">Vite logotyp</span>
                            </li>
                          </ul>
                        </li>
                        
                        <li className="file-item">
                          <span className="folder"></span>
                          <span className="file-name">src/</span>
                          <span className="file-description">Källkodsmapp med alla React-komponenter</span>
                        </li>
                        
                        <li>
                          <ul>
                            <li className="file-item">
                              <span className="folder"></span>
                              <span className="file-name">assets/</span>
                              <span className="file-description">Statiska resurser som bilder och ikoner</span>
                            </li>
                            
                            <li>
                              <ul>
                                <li className="file-item">
                                  <span className="html-file"></span>
                                  <span className="file-name">react.svg</span>
                                  <span className="file-description">React logotyp</span>
                                </li>
                              </ul>
                            </li>
                            
                            <li className="file-item">
                              <span className="folder"></span>
                              <span className="file-name">components/</span>
                              <span className="file-description">React-komponenter för olika delar av appen</span>
                            </li>
                            
                            <li>
                              <ul>
                                <li className="file-item">
                                  <span className="react-component"></span>
                                  <span className="file-name">DataVisualization.jsx</span>
                                  <span className="file-description">Komponent för visualisering av data</span>
                                </li>
                                <li className="file-item">
                                  <span className="react-component"></span>
                                  <span className="file-name">Description.jsx</span>
                                  <span className="file-description">Denna beskrivningskomponent</span>
                                </li>
                                <li className="file-item">
                                  <span className="react-component"></span>
                                  <span className="file-name">Quiz.jsx</span>
                                  <span className="file-description">Kunskapstester för användaren</span>
                                </li>
                                <li className="file-item">
                                  <span className="react-component"></span>
                                  <span className="file-name">TabPanel.jsx</span>
                                  <span className="file-description">Hanterar flikbaserad navigation</span>
                                </li>
                              </ul>
                            </li>
                            
                            <li className="file-item">
                              <span className="css-file"></span>
                              <span className="file-name">App.css</span>
                              <span className="file-description">Stilar för App-komponenten</span>
                            </li>
                            <li className="file-item">
                              <span className="react-component"></span>
                              <span className="file-name">App.jsx</span>
                              <span className="file-description">Huvudkomponent som styr applikationen</span>
                            </li>
                            <li className="file-item">
                              <span className="css-file"></span>
                              <span className="file-name">index.css</span>
                              <span className="file-description">Globala stilar för hela appen</span>
                            </li>
                            <li className="file-item">
                              <span className="react-component"></span>
                              <span className="file-name">main.jsx</span>
                              <span className="file-description">Startpunkt som renderar React-appen</span>
                            </li>
                          </ul>
                        </li>
                        
                        <li className="file-item">
                          <span className="project-file"></span>
                          <span className="file-name">.gitignore</span>
                          <span className="file-description">Filer som ska ignoreras av Git</span>
                        </li>
                        <li className="file-item">
                          <span className="js-config"></span>
                          <span className="file-name">eslint.config.js</span>
                          <span className="file-description">Konfiguration för kodkvalitet</span>
                        </li>
                        <li className="file-item">
                          <span className="html-file"></span>
                          <span className="file-name">index.html</span>
                          <span className="file-description">HTML-mall för appen</span>
                        </li>
                        <li className="file-item">
                          <span className="project-file"></span>
                          <span className="file-name">package-lock.json</span>
                          <span className="file-description">Låsta versioner av beroenden</span>
                        </li>
                        <li className="file-item">
                          <span className="project-file"></span>
                          <span className="file-name">package.json</span>
                          <span className="file-description">Projektets beroenden och skript</span>
                        </li>
                        <li className="file-item">
                          <span className="project-file"></span>
                          <span className="file-name">README.md</span>
                          <span className="file-description">Projektdokumentation</span>
                        </li>
                        <li className="file-item">
                          <span className="js-config"></span>
                          <span className="file-name">vite.config.js</span>
                          <span className="file-description">Konfiguration för Vite byggverktyg</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Modal för att visa GitHub-integration */}
        {showGitHubModal && (
          <div className="structure-modal-overlay">
            <div className="structure-modal">
              <div className="structure-modal-header">
                <h3>GitHub-integration: från lokal kod till repository</h3>
                <button className="close-button" onClick={closeGitHubModal}>✕</button>
              </div>
              
              <div className="structure-modal-content">
                <div className="github-section">
                  <h4>Vad är GitHub?</h4>
                  <p>GitHub är en plattform för versionshantering och samarbete som gör det möjligt för utvecklare att lagra, hantera och spåra ändringar i sin kod. Det är byggt ovanpå Git, ett distribuerat versionskontrollsystem.</p>
                  
                  <h4>Fördelar med GitHub</h4>
                  <ul>
                    <li><strong>Versionshantering</strong> - Spåra alla ändringar i koden över tid</li>
                    <li><strong>Samarbete</strong> - Flera utvecklare kan arbeta på samma projekt</li>
                    <li><strong>Säkerhetskopiering</strong> - Din kod är säkert lagrad i molnet</li>
                    <li><strong>Öppen källkod</strong> - Dela ditt arbete med andra utvecklare</li>
                    <li><strong>CI/CD</strong> - Kontinuerlig integration och leverans</li>
                  </ul>
                  
                  <h4>Steg för att överföra ett projekt till GitHub</h4>
                  <div className="github-steps">
                    <ol>
                      <li>
                        <strong>Skapa ett GitHub-konto</strong>
                        <p>Besök <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> och registrera dig om du inte redan har ett konto.</p>
                      </li>
                      <li>
                        <strong>Skapa ett nytt repository på GitHub</strong>
                        <p>Klicka på "+" ikonen i övre högra hörnet och välj "New repository".</p>
                        <p>Ge ditt repository ett namn (t.ex. "generativai-react") och klicka på "Create repository".</p>
                      </li>
                      <li>
                        <strong>Installera Git lokalt</strong>
                        <p>Ladda ner och installera Git från <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">git-scm.com</a>.</p>
                      </li>
                      <li>
                        <strong>Initiera Git i ditt lokala projekt</strong>
                        <p>Öppna Terminal eller PowerShell och navigera till din projektkatalog:</p>
                        <pre><code>cd sökväg/till/ditt/projekt</code></pre>
                        <p>Initiera Git i denna katalog:</p>
                        <pre><code>git init</code></pre>
                      </li>
                      <li>
                        <strong>Lägg till filer till Git</strong>
                        <p>Lägg till alla filer i ditt projekt till Git staging area:</p>
                        <pre><code>git add .</code></pre>
                        <p>Detta förbereder alla filer för commit.</p>
                      </li>
                      <li>
                        <strong>Commita dina ändringar</strong>
                        <p>Skapa din första commit med ett beskrivande meddelande:</p>
                        <pre><code>git commit -m "Initial commit"</code></pre>
                      </li>
                      <li>
                        <strong>Koppla ditt lokala repository till GitHub</strong>
                        <p>Lägg till GitHub-repositoryt som en remote:</p>
                        <pre><code>git remote add origin https://github.com/användarnamn/repo-namn.git</code></pre>
                        <p>Ersätt "användarnamn" med ditt GitHub-användarnamn och "repo-namn" med ditt repository-namn.</p>
                      </li>
                      <li>
                        <strong>Pusha din kod till GitHub</strong>
                        <p>Skicka din kod till GitHub:</p>
                        <pre><code>git push -u origin master</code></pre>
                        <p>Eller om du använder main som standardbranch:</p>
                        <pre><code>git push -u origin main</code></pre>
                      </li>
                    </ol>
                  </div>
                  
                  <h4>Viktigt att tänka på</h4>
                  <ul>
                    <li><strong>Känslig information</strong> - Placera aldrig API-nycklar, lösenord eller annan känslig information direkt i koden. Använd miljövariabler eller .env-filer som är listade i .gitignore.</li>
                    <li><strong>.gitignore</strong> - Skapa alltid en .gitignore-fil som exkluderar onödiga filer som node_modules/, build/ och andra temporära filer.</li>
                    <li><strong>Commitmeddelanden</strong> - Skriv tydliga och beskrivande commitmeddelanden som förklarar dina ändringar.</li>
                    <li><strong>README.md</strong> - Skapa alltid en bra README-fil med information om ditt projekt, installationsinstruktioner och användning.</li>
                  </ul>
                  
                  <h4>Vanliga Git-kommandon</h4>
                  <div className="git-commands">
                    <table>
                      <thead>
                        <tr>
                          <th>Kommando</th>
                          <th>Beskrivning</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><code>git status</code></td>
                          <td>Visa status för arbetskatalogen och staging area</td>
                        </tr>
                        <tr>
                          <td><code>git add &lt;fil&gt;</code></td>
                          <td>Lägg till en specifik fil till staging area</td>
                        </tr>
                        <tr>
                          <td><code>git add .</code></td>
                          <td>Lägg till alla ändrade filer till staging area</td>
                        </tr>
                        <tr>
                          <td><code>git commit -m "meddelande"</code></td>
                          <td>Commita ändringarna med ett beskrivande meddelande</td>
                        </tr>
                        <tr>
                          <td><code>git push</code></td>
                          <td>Skicka lokala commits till GitHub</td>
                        </tr>
                        <tr>
                          <td><code>git pull</code></td>
                          <td>Hämta ändringar från GitHub till lokala repository</td>
                        </tr>
                        <tr>
                          <td><code>git branch</code></td>
                          <td>Lista alla branches</td>
                        </tr>
                        <tr>
                          <td><code>git checkout -b &lt;branch-namn&gt;</code></td>
                          <td>Skapa och byt till en ny branch</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h4>Kontinuerligt arbetsflöde</h4>
                  <p>Efter den initiala pushen, kan du fortsätta arbeta med ditt projekt och regelbundet pusha ändringar till GitHub:</p>
                  <ol>
                    <li>Gör ändringar i din kod</li>
                    <li>Lägg till ändringarna: <code>git add .</code></li>
                    <li>Commita ändringarna: <code>git commit -m "Beskrivning av ändringarna"</code></li>
                    <li>Pusha till GitHub: <code>git push</code></li>
                  </ol>
                  
                  <h4>GitHub och denna applikation</h4>
                  <p>Detta React-projekt finns nu på GitHub och kan nås via:</p>
                  <p><a href="https://github.com/kentlundgren/generativai-react" target="_blank" rel="noopener noreferrer">https://github.com/kentlundgren/generativai-react</a></p>
                  <p>Repositoryt innehåller all källkod, inklusive komponenter, stilmallar och konfigurationsfiler.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="description-section">
          <h4>Att visualisera programstruktur</h4>
          <p>Visualiseringen av programstrukturen ovan är ett exempel på hur man kan göra komplex information mer tillgänglig. Här är några viktiga lärdomar:</p>
          
          <ul>
            <li><strong>Använd modaler för komplexa visualiseringar</strong> - Modaler fungerar bra för att visa detaljerad information utan att lämna nuvarande vy.</li>
            <li><strong>Färgkodning förbättrar förståelsen</strong> - Olika färger för olika filtyper hjälper användare att snabbt identifiera vad de tittar på.</li>
            <li><strong>Hierarkisk struktur</strong> - Visa mappstruktur som ett indraget träd följer naturliga mentala modeller för filsystem.</li>
            <li><strong>Erbjud både översikt och detaljer</strong> - Enklare sammanfattningar kombinerat med möjligheten att se all detaljerad information.</li>
            <li><strong>Lokal datahantering</strong> - Genom att integrera strukturen i applikationen undviker vi begränsningar med externa fillänkar.</li>
          </ul>
          
          <p>Tack vare React kan vi implementera detta på ett dynamiskt sätt med state för att visa/dölja innehåll efter behov.</p>
        </div>
        
        <h4>Funktionalitet</h4>
        <p>Programmet implementerar följande funktioner:</p>
        <ul>
          <li>Komponentbaserad arkitektur för enklare underhåll och utveckling</li>
          <li>React state för att hantera applikationstillstånd (quiz-svar, aktiv flik, m.m.)</li>
          <li>Reaktiv användarinteraktion som direkt uppdaterar gränssnittet</li>
          <li>Responsiv design för olika skärmstorlekar</li>
          <li>Modulariserad datahantering för enkel uppdatering av innehåll</li>
        </ul>
      </div>
      
      <div className="description-section">
        <h3>Jämförelse: HTML/CSS/JS vs React med Vite</h3>
        <p>Denna applikation är byggd med React och Vite, vilket erbjuder flera fördelar jämfört med traditionell HTML/CSS/JavaScript-utveckling.</p>
        
        <h4>Fördelar med React och Vite</h4>
        <ul>
          <li><strong>Komponentbaserad arkitektur:</strong> Gör det enklare att organisera och återanvända kod</li>
          <li><strong>Reaktiv uppdatering:</strong> Automatisk UI-uppdatering när data ändras</li>
          <li><strong>Virtual DOM:</strong> Effektivare renderingar som ger bättre prestanda</li>
          <li><strong>Hot Module Replacement:</strong> Omedelbara uppdateringar under utveckling utan fullständig omladdning</li>
          <li><strong>Optimerad byggprocess:</strong> Automatisk minifiering, bundling och code-splitting</li>
          <li><strong>Robust ekosystem:</strong> Stort utbud av bibliotek och verktyg</li>
        </ul>
        
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Aspekt</th>
              <th>Traditionell HTML/CSS/JS</th>
              <th>React med Vite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kodorganisation</td>
              <td>Filbaserad separation av teknologier</td>
              <td>Komponentbaserad separation av funktionalitet</td>
            </tr>
            <tr>
              <td>Rendering</td>
              <td>Direkt DOM-manipulation</td>
              <td>Virtual DOM och deklarativ syntax</td>
            </tr>
            <tr>
              <td>Tillståndshantering</td>
              <td>Manuell via globala variabler eller DOM-lagring</td>
              <td>React hooks (useState, useEffect) och kontexthantering</td>
            </tr>
            <tr>
              <td>Utvecklingsupplevelse</td>
              <td>Manuell sidladdning för att se ändringar</td>
              <td>Hot Module Replacement (HMR) för omedelbar feedback</td>
            </tr>
            <tr>
              <td>Byggprocess</td>
              <td>Ofta minimal eller manuell</td>
              <td>Automatiserad med optimering för produktion</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="description-section">
        <h3>Ramverk och teknologival</h3>
        <p>När du skapar ett projekt med Vite har du flera val av ramverk och teknologier:</p>
        
        <h4>Olika ramverk med Vite</h4>
        <ul>
          <li><strong>React:</strong> Populärt UI-bibliotek med stort ekosystem (denna applikation)</li>
          <li><strong>Vue:</strong> Progressivt ramverk med enkel inlärningskurva</li>
          <li><strong>Svelte:</strong> Kompilerar till optimerad vanilla JS utan virtual DOM</li>
          <li><strong>Preact:</strong> Lättviktigt alternativ till React</li>
          <li><strong>Lit:</strong> Bygger på webkomponenter för ramverksoberoende användning</li>
          <li><strong>Vanilla JS:</strong> Ren JavaScript utan ramverk</li>
        </ul>
        
        <h4>JavaScript vs TypeScript</h4>
        <p>För denna applikation valde vi JavaScript, men TypeScript är ett kraftfullt alternativ:</p>
        <ul>
          <li><strong>JavaScript:</strong> Enklare att börja med, mindre uppstartstid</li>
          <li><strong>TypeScript:</strong> Lägger till statisk typning för ökad kodsäkerhet och bättre utvecklarverktyg</li>
          <li><strong>SWC (Speedy Web Compiler):</strong> En snabbare alternativ kompilator än Babel</li>
        </ul>
      </div>
      
      <div className="description-section">
        <h3>Utveckling och produktion</h3>
        
        <h4>Utvecklingsprocess</h4>
        <p>För att utveckla denna applikation användes följande steg:</p>
        <ol>
          <li><strong>Initialisering:</strong> <code>npm create vite@latest generativai-react --template react</code></li>
          <li><strong>Installation av beroenden:</strong> <code>npm install</code></li>
          <li><strong>Utvecklingsserver:</strong> <code>npm run dev</code> med hot module replacement</li>
          <li><strong>Komponentutveckling:</strong> Separation av funktionalitet i olika React-komponenter</li>
          <li><strong>Stilutveckling:</strong> CSS för layout och design</li>
        </ol>
        
        <h4>Byggprocessen för produktion</h4>
        <p>För att skapa en produktionsversion av applikationen:</p>
        <pre><code>npm run build</code></pre>
        
        <p>Detta skapar en optimerad version i <code>dist</code>-mappen som kan hostas på vilken webbserver som helst.</p>
        
        <h4>Konfigurering för hosting</h4>
        <p>För att applikationen ska fungera korrekt på kentlundgren.se, konfigurerades bas-URL i <code>vite.config.js</code>:</p>
        <pre>
<code>base: process.env.NODE_ENV === 'production' 
  ? '/program/testprogram/generativai-react/' 
  : '/'</code>
        </pre>
      </div>
      
      <div className="description-section">
        <h3>Användbara verktyg och länkar</h3>
        <ul>
          <li><a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React - Officiell dokumentation</a></li>
          <li><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite - Snabbt byggverktyg</a></li>
          <li><a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js - JavaScript runtime</a></li>
          <li><a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer">npm - Node Package Manager</a></li>
        </ul>
      </div>
      
      <button id="backToApp" className="description-button" onClick={onBack}>
        Tillbaka till programmet
      </button>
      
      <style jsx>{`
        .structure-link-container {
          background-color: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 15px;
          margin: 20px 0;
        }
        
        .structure-button-container {
          text-align: center;
          margin-bottom: 15px;
        }
        
        .structure-button {
          background-color: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .structure-button:hover {
          background-color: #0055aa;
        }
        
        .structure-note {
          margin-top: 8px;
          color: #666;
          font-size: 14px;
        }
        
        .simple-structure {
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }
        
        .simple-structure ul {
          margin-top: 5px;
          padding-left: 25px;
        }

        /* Modal stil */
        .structure-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .structure-modal {
          background-color: white;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
        }
        
        .structure-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border-bottom: 1px solid #eee;
        }
        
        .structure-modal-header h3 {
          margin: 0;
          font-size: 1.2rem;
        }
        
        .close-button {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          padding: 0;
          color: #666;
        }
        
        .close-button:hover {
          color: #000;
        }
        
        .structure-modal-content {
          padding: 0;
          overflow-y: auto;
          flex-grow: 1;
        }
        
        /* Färgkodning */
        .färgkodning {
          background-color: #f5f5f5;
          padding: 15px;
          border-bottom: 1px solid #e0e0e0;
        }
        
        .färgkodning-titel {
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .kodning-lista {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
        }
        
        .kodning-item {
          display: flex;
          align-items: center;
          margin-bottom: 5px;
        }
        
        /* File list */
        .file-list {
          padding: 15px 20px;
        }
        
        /* File icons */
        .folder {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #0078d4;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        .react-component {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #9c27b0;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        .css-file {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #4caf50;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        .html-file {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #2196F3;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        .js-config {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #ff9800;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        .project-file {
          display: inline-block;
          width: 16px;
          height: 16px;
          background-color: #9e2b25;
          margin-right: 8px;
          border-radius: 2px;
        }
        
        /* File items */
        .file-item {
          margin: 4px 0;
          display: flex;
          align-items: center;
        }
        
        .file-name {
          font-weight: 500;
        }
        
        .file-description {
          color: #777;
          margin-left: 8px;
          font-size: 0.9em;
        }
        
        .file-list ul {
          list-style-type: none;
          margin: 0;
          padding-left: 24px;
        }
        
        .file-list > ul {
          padding-left: 0;
        }
        
        /* GitHub knapp stil */
        .github-button {
          margin-left: 10px;
          background-color: #2b3137;
        }
        
        .github-button:hover {
          background-color: #24292e;
        }
        
        /* GitHub modal innehåll */
        .github-section {
          padding: 20px;
        }
        
        .github-section h4 {
          margin-top: 25px;
          margin-bottom: 10px;
          border-bottom: 1px solid #eaecef;
          padding-bottom: 8px;
        }
        
        .github-section h4:first-child {
          margin-top: 0;
        }
        
        .github-section ul, .github-section ol {
          padding-left: 25px;
          margin-bottom: 15px;
        }
        
        .github-section li {
          margin-bottom: 8px;
        }
        
        .github-section pre {
          background-color: #f6f8fa;
          border-radius: 4px;
          padding: 10px;
          overflow-x: auto;
          margin: 10px 0;
        }
        
        .github-section code {
          font-family: 'Consolas', 'Monaco', monospace;
          background-color: #f6f8fa;
          padding: 2px 5px;
          border-radius: 3px;
          font-size: 0.9em;
        }
        
        .github-section pre code {
          background-color: transparent;
          padding: 0;
        }
        
        .git-commands table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        
        .git-commands th, .git-commands td {
          border: 1px solid #dfe2e5;
          padding: 8px 12px;
          text-align: left;
        }
        
        .git-commands th {
          background-color: #f6f8fa;
        }
        
        .github-steps ol {
          counter-reset: step-counter;
          list-style-type: none;
          padding-left: 0;
        }
        
        .github-steps li {
          counter-increment: step-counter;
          position: relative;
          padding-left: 40px;
          margin-bottom: 20px;
        }
        
        .github-steps li::before {
          content: counter(step-counter);
          position: absolute;
          left: 0;
          top: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #0366d6;
          color: white;
          text-align: center;
          line-height: 28px;
          font-weight: bold;
        }
        
        .github-steps strong {
          display: block;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  );
}

export default Description; 