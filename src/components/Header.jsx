import CustomButton from './Button'

function Header() {
    return (      
        <header className="container">
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
                <div className="right-content">         
                    <div className="btn-download">
                        <CustomButton value="Baixar CV" />
                    </div>
                </div>
            </div>
        </header>    
    )
}

export default Header