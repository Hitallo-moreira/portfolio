import React, { useState, useEffect } from 'react';
import MyCarousel from "./Carousel";
import { useTranslation } from 'react-i18next';

function AboutSection() {
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
        <div id="about">
            <div className="container about-section">
                <div className="about-align">
                    <div className="title-line"></div>
                    <p className="about-title">{t("About")}</p>
                </div>
                <div className='my-info'>
                    <div className="info">
                        <h2 className="title">{t("Front-end Developer")}</h2>
                        <p className="about-me">
                            {isMobile ? t('With 1 year of experience in the market, I continue to explore new ways to create impactful digital experiences.') : t('Focused on web development, with 1 year of experience in the market, I continue to explore new ways to create impactful digital experiences.')}
                        </p>
                    </div>   
                    <div className="tech">
                        <div className="stacks">
                            <h2 className="title">Stacks</h2>
                            <p className="my-stacks">
                                {isMobile ? t('Working with the following stacks:') : t('I have knowledge in the following technologies:')}
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

