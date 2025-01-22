import { useState, useEffect } from 'react'
import './App.css'
import Maria from './assets/Maria.png'
import profile from './assets/profile.jpg'
import PhotoProfile from './assets/PhotoProfile.png'
import ExplosionRose from './assets/ExplosionRose.png'
import Carrousel1 from './assets/Carrousel1.png'
import Carrousel2 from './assets/Carrousel2.png'
import Carrousel3 from './assets/Carrousel3.png'


function App() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const texts = [
    "Disponible pour des postes de communication, commerce ou marketing",
    "Passionnée par le marketing digital",
    "Experte en relations publiques"
  ];

  useEffect(() => {
    let currentText = texts[textIndex];
    let currentChar = 0;
    let isTyping = true;

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (currentChar < currentText.length) {
          setDisplayText(currentText.slice(0, currentChar + 1));
          currentChar++;
        } else {
          // Attendre avant de commencer à effacer
          setTimeout(() => {
            isTyping = false;
            currentChar = currentText.length;
          }, 1000);
        }
      } else {
        if (currentChar > 0) {
          setDisplayText(currentText.slice(0, currentChar - 1));
          currentChar--;
        } else {
          clearInterval(typeInterval);
          // Passer au texte suivant
          setTimeout(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 500);
        }
      }
    }, 50); // Vitesse de frappe

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img src={Maria} alt="Maria" className="logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#parcours">Mon parcours</a></li>
          <li><a href="#competences">Mes compétences</a></li>
          <li><a href="#projets">Mes projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Le reste de votre contenu ici */}
        <section className="profile">
          <div className="profile-text">
            <img src={profile} alt="profile" className="profile-img" />
            <div className="profile-text-content">
              <h1>Marie-Anne Lebogo</h1>
              <h2 className="typing-effect">
                {displayText}
                <span className="caret"></span>
              </h2>
            </div>
          </div>
        </section>
        {/* Mettre une section avec deux div centrées et identiques et cote à cote*/}
        <section className="section-container" id="apropos">
          <div className="section-content-about">
            <h2 className="section-title">À propos</h2>
            <p className="section-text">
              Bienvenue sur mon <b>portfolio,</b>
            </p>
            <p className="section-text">
              je m'appelle Marie-Anne Lebogo,
            </p>
            <p className="section-text">
              Dotée d'une <b>grande capacité d'adaptation</b>, <b>dynamique</b>, <b>proactive</b> et <b>sociale</b>, 
              je capitalise plus de trois années d'expérience dans des contextes professionnels variés.
            </p>
            <p className="section-text">
              Mes compétences en matière de <b className="section-text-bold">stratégie marketing</b>, en <b className="section-text-bold">campagne de communication</b>, 
              en <b className="section-text-bold">gestion et suivi des performances des sites web</b> et en <b className="section-text-bold">organisation des évènements 
              et salons marketing</b> me permettront de répondre aux besoins de votre entreprise en pleine croissance.
            </p>
            <div className="section-text-button">
              <button className="section-text-button-cv">Mon CV</button>
              <button className="section-text-button-cv">Mes projets</button>
            </div>
          </div>
          <div className="section-content-image">
            {/* Mettre une image de fond avec l'image ExplosionRose.png*/}
            <img src={PhotoProfile} alt="PhotoProfile" className="photo-profile-rounded" />
          </div>
        </section>
        {/* Section carrousel avec les images de mes projets*/}
        
        <section className="section-carrousel" id="parcours">
        <h2 className="section-title">Mon Parcours</h2>

          <div className="carrousel-container">
            <div className="carousel">
              <div className="carousel-inner">
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked/>
                <div className="carousel-item">
                  <img src={Carrousel1} alt="Carrousel1"/>
                </div>
                <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden/>
                <div className="carousel-item">
                  <img src={Carrousel2} alt="Carrousel2"/>
                </div>
                <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden/>
                <div className="carousel-item">
                  <img src={Carrousel3} alt="Carrousel3"/>
                </div>
                <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
                <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
