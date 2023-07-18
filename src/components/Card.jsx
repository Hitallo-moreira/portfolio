import CustomButton from "./Button";
import { useTranslation } from 'react-i18next';

function Card({ title, desc, image, link, openInNewTab}) {
    const {t} = useTranslation();

    return (
        <div>
            <div className="card">
                <img className="card-img-top" src={image} alt="Card thumbnail" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="action">
                        <CustomButton value={t("Access")} url={link} openInNewTab={openInNewTab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
  