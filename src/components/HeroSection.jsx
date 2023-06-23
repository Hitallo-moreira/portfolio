import React, { useState, useEffect } from 'react';
import linkedInLogo from '../assets/images/linkedin.svg';
import GithubLogo from '../assets/images/github.svg';
import illustration from '../assets/images/illustration.svg';
import CustomButton from './Button';

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="container hero-section">
      <h1 className="name">Hitallo Moreira</h1>
      <div className="name-border"></div>
      <div className="row">
        <div className="col">
          <section className="social-network">
            <a href="https://github.com/Hitallo-moreira" target="_blank" rel="noopener noreferrer">
              <img src={GithubLogo} alt="Github Logo" />
            </a>
            <a href="https://www.linkedin.com/in/hitallo-moreira/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInLogo} alt="linkedIn Logo" />
            </a>
            <div className="illustration">
              <img src={illustration} alt="illustration" />
            </div>
          </section>
        </div>
        <div className="col">
          <section className='introduction'>
            <h2 className='title'>{isMobile ? 'Transformando códigos em experiências digitais.' : 'Transformando linhas de código em experiências digitais.'}</h2>
            <p className='goal'>{isMobile ? 'desenvolvendo soluções criativas que vão além do código. Transformando ideias em experiências memoráveis.' : 'Meu objetivo é trazer vida para projetos digitais, desenvolvendo soluções criativas que vão além do código. Transformando ideias em experiências digitais memoráveis.'}</p>
            <div className="learn-more-btn">
              <CustomButton value="Saiba Mais" url="#about" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
