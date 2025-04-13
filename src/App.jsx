// App.jsx - Huvudkomponent för generativAI-applikationen

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Importera alla komponenter
import Assignment from './components/Assignment'
import Tips from './components/Tips'
import Visual from './components/Visual'
import Quiz from './components/Quiz'
import Solution from './components/Solution'
import Description from './components/Description'
import ThemeToggle from './components/ThemeToggle'

function App() {
  // State för att hålla reda på vilken flik som är aktiv
  const [activeTab, setActiveTab] = useState('assignment')
  // State för att visa/dölja programbeskrivning
  const [showDescription, setShowDescription] = useState(false)
  // State för att hålla reda på om quizen är genomförd
  const [quizCompleted, setQuizCompleted] = useState(false)

  // Funktion för att hantera tabbyte
  const handleTabChange = (tabName) => {
    setActiveTab(tabName)
  }

  // Funktion för att visa/dölja beskrivningen
  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  // Funktion för att markera quizet som färdigt
  const handleQuizComplete = () => {
    setQuizCompleted(true)
  }

  return (
    <>
      {/* Tema-väljare */}
      <ThemeToggle />
      
      {showDescription ? (
        <Description onBack={toggleDescription} />
      ) : (
        <div className="app-container">
          <header>
            <h1>Generativ AI - Grundkurs</h1>
            <p>Lär dig om kraften i generativ artificiell intelligens</p>
          </header>

          <nav className="tabs">
            <button
              className={activeTab === 'assignment' ? 'active' : ''}
              onClick={() => handleTabChange('assignment')}
            >
              Uppgift
            </button>
            <button
              className={activeTab === 'tips' ? 'active' : ''}
              onClick={() => handleTabChange('tips')}
            >
              Tips
            </button>
            <button
              className={activeTab === 'visual' ? 'active' : ''}
              onClick={() => handleTabChange('visual')}
            >
              Visualisering
            </button>
            <button
              className={activeTab === 'quiz' ? 'active' : ''}
              onClick={() => handleTabChange('quiz')}
            >
              Quiz
            </button>
            <button
              className={activeTab === 'solution' ? 'active' : ''}
              onClick={() => handleTabChange('solution')}
            >
              Lösning
            </button>
          </nav>

          <main>
            <div className="tab-content" style={{ display: activeTab === 'assignment' ? 'block' : 'none' }}>
              <Assignment />
            </div>
            <div className="tab-content" style={{ display: activeTab === 'tips' ? 'block' : 'none' }}>
              <Tips />
            </div>
            <div className="tab-content" style={{ display: activeTab === 'visual' ? 'block' : 'none' }}>
              <Visual />
            </div>
            <div className="tab-content" style={{ display: activeTab === 'quiz' ? 'block' : 'none' }}>
              <Quiz onComplete={handleQuizComplete} />
            </div>
            <div className="tab-content" style={{ display: activeTab === 'solution' ? 'block' : 'none' }}>
              <Solution quizCompleted={quizCompleted} />
            </div>
          </main>

          <footer>
            <button className="info-button" onClick={toggleDescription}>
              Om programmet
            </button>
            <p>
              © 2023 GenerativAI Education
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </p>
          </footer>
        </div>
      )}
    </>
  )
}

export default App
