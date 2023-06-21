import CustomButton from './Button'
import github from '../assets/github.svg'

function Footer() {
    return (
        <footer>
            <div className="container footer-info">
                <div className="contact-section" id='contact'>
                    <h1>Entre em contato:</h1>
                    <div className="action">
                        <div className="linkedin">
                            <CustomButton value="LinkedIn"/>
                        </div>
                        <div className="email">
                            <CustomButton value="Email" />
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <p><a href="#">H</a></p>
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