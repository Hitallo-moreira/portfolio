import CustomButton from "./Button"

function Card({ title, desc, image, link, openInNewTab}) {
    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={image} alt="Card thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="action">
                        <CustomButton value="Acessar" url={link} openInNewTab={openInNewTab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
  