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
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Projetos</a></li>
                            <li><a href="#">Contato</a></li>
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