import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import CustomButton from './Button';
import file from '../assets/CvHitallo.Feitosa.pdf';
import { useMediaQuery } from 'react-responsive';

function Header() {
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
            <a className='download' href={file} download onClick={handleMenuClose}>Baixar CV</a>
            <a className="menu-item" href="#about" onClick={handleMenuClose}>
              Sobre
            </a>
            <a className="menu-item" href="#projects" onClick={handleMenuClose}>
              Projetos
            </a>
            <a className="menu-item" href="#contact" onClick={handleMenuClose}>
              Contato
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
                  <li><a href="#about">Sobre</a></li>
                  <li><a href="#projects">Projetos</a></li>
                  <li><a href="#contact">Contato</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
