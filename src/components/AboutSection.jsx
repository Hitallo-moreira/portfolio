import MyCarousel from "./Carousel"

function AboutSection() {
    return (
        <div id="about">
            <div className="container about-section">
                <div className="about-align">
                    <div className="title-line"></div>
                    <p className="about-title">Sobre</p>
                </div>
                <div className="row">
                    <div className="col">
                        <h2 className="title">Desenvolvedor Front-end</h2>
                        <p className="about-me">
                            Focado em desenvolvimento Web, com 1 ano de atuação no mercado. Continuo explorando novas maneiras de criar experiências digitais impactantes.
                        </p>
                    </div>
                    <div className="col">
                        <div className="stacks">
                            <h2 className="title">Stacks</h2>
                            <p className="my-stacks">
                                Possuo conhecimento nas seguintes tecnologias:
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
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

