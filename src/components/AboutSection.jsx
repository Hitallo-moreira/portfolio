import React, { useState, useEffect } from 'react';
import MyCarousel from "./Carousel"

function AboutSection() {
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
        <div id="about">
            <div className="container about-section">
                <div className="about-align">
                    <div className="title-line"></div>
                    <p className="about-title">Sobre</p>
                </div>
                <div className='my-info'>
                    <div className="info">
                        <h2 className="title">Desenvolvedor Front-end</h2>
                        <p className="about-me">
                            {isMobile ? 'Com 1 ano de atuação no mercado, Continuo explorando novas maneiras de criar experiências digitais impactantes.' : 'Focado em desenvolvimento Web, com 1 ano de atuação no mercado, continuo explorando novas maneiras de criar experiências digitais impactantes.'}
                        </p>
                    </div>   
                    <div className="tech">
                        <div className="stacks">
                            <h2 className="title">Stacks</h2>
                            <p className="my-stacks">
                                {isMobile ? 'Trabalhando com as seguintes stacks:' : 'Possuo conhecimento nas seguintes tecnologias:'}
                            </p>
                            <div className="carousel">
                                <MyCarousel />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection

