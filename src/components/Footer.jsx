import CustomButton from './Button';
import github from '../assets/images/github.svg';
import arrow from '../assets/images/arrow-up.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
    const {t} = useTranslation();

    return (
        <footer>
            <div className="container footer-info">
                <div className="contact-section" id='contact'>
                    <h1>{t("Get in touch:")}</h1>
                    <div className="action">
                        <div className="linkedin">
                            <CustomButton value="LinkedIn" url="https://www.linkedin.com/in/hitallo-moreira/" openInNewTab={true} />
                        </div>
                        <div className="email">
                            <a href="mailto:hitallomoreira13@gmail.com">
                                <CustomButton value="Email" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="back-to-top">
                    <a href="#">
                        <img src={arrow} alt="arrow up" />
                    </a>
                </div>
            </div>
            <div className="codeby">
                <p>Coded by Hitallo</p>
                <a href="https://github.com/Hitallo-moreira" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github Logo" />
                </a>
            </div>
        </footer>
    )
}

export default Footer