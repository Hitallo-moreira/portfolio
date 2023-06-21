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
                            <CustomButton value="LinkedIn" url="https://www.linkedin.com/in/hitallo-moreira/" openInNewTab={true} />
                        </div>
                        <div className="email">
                            <a href="mailto:seuemail@example.com">
                                <CustomButton value="Email" />
                            </a>
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