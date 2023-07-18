import React, { useState, useEffect } from 'react';
import linkedInLogo from '../assets/images/linkedin.svg';
import GithubLogo from '../assets/images/github.svg';
import illustration from '../assets/images/illustration.svg';
import CustomButton from './Button';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();
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
            <h2 className='title'>{isMobile ? t('Turning lines of code into digital experiences.') : t('Turning lines of code into digital experiences.')}</h2>
            <p className='goal'>{isMobile ? t('Developing creative solutions that go beyond code. Turning ideas into memorable experiences.') : t('My goal is to bring life to digital projects by developing creative solutions that go beyond code. Turning ideas into memorable digital experiences.')}</p>
            <div className="learn-more-btn">
              <CustomButton value={t("Learn More")} url="#about" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
