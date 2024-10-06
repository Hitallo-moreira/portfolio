import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import CustomButton from './Button';
import file from '../assets/CvHitallo.Feitosa.pdf';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher  from './LanguageSwitcher';

function Header() {
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='container'>
      {isMobile ? (
        <header className='mobile-header'>
          <div className="logo">
            <p><a href="#">H</a></p>
          </div>
          <Menu left width={'250px'} className="mobile-menu" isOpen={isOpen} onStateChange={state => setIsOpen(state.isOpen)}>
            <LanguageSwitcher />
            <a className='download' href={file} download onClick={handleMenuClose}>{t("Download CV")}</a>
            <a className="menu-item" href="#about" onClick={handleMenuClose}>
              <p>{t("About")}</p>
            </a>
            <a className="menu-item" href="#projects" onClick={handleMenuClose}>
              <p>{t("Projects")}</p>
            </a>
            <a className="menu-item" href="#contact" onClick={handleMenuClose}>
              <p>{t("Contact")}</p>
            </a>
          </Menu>
        </header>
      ) : (
        <header>
          <div className="content">
            <div className="left-content">
              <div className="logo">
                <p><a href="#">H</a></p>
              </div>
              <nav>
                <ul>
                  <li><a href="#about">{t("About")}</a></li>
                  <li><a href="#projects">{t("Projects")}</a></li>
                  <li><a href="#contact">{t("Contact")}</a></li>
                </ul>
              </nav>
            </div>
            <div className="right-content">
              <LanguageSwitcher />
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
