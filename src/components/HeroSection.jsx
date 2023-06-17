import linkedInLogo from '../assets/linkedin.svg';
import GithubLogo from '../assets/github.svg';
import illustration from '../assets/illustration.svg';
import CustomButton from './Button';

function HeroSection() {
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
                        <h2 className='title'>Transformando linhas de código em experiências digitais.</h2>
                        <p className='goal'>Meu objetivo é trazer vida para projetos digitais, desenvolvendo soluções criativas que vão além do código. Transformando ideias em experiências digitais memoráveis.</p>
                        <div className="learn-more-btn">
                            <CustomButton value="Saiba Mais" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HeroSection