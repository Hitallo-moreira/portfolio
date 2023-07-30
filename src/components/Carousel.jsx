import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import js from '../assets/images/js.svg'
import react from '../assets/images/react.svg'
import vue from '../assets/images/vue.svg'
import sass from '../assets/images/sass.svg'
import bootstrap from '../assets/images/bootstrap.png'
import git from '../assets/images/git.svg'
import magento  from '../assets/images/magento.svg'

const MyCarousel = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
    }

    return (
        <Slider {...settings}>
            <div>
                <img src={html} alt="HTML icon" />
            </div>
            <div>
                <img src={css} alt="CSS icon" />
            </div>
            <div>
                <img src={js} alt="JavaScript Icon" />
            </div>
            <div>
                <img src={react} alt="React Icon" />
            </div>
            <div>
                <img src={vue} alt="Vue Icon" />
            </div>
            <div>
                <img src={sass} alt="Sass Icon" />
            </div>
            <div>
                <img src={bootstrap} alt="Bootstrap Icon" />
            </div>
            <div>
                <img src={git} alt="Git Icon" />
            </div>
            <div>
                <img src={magento} alt="Magento Icon" />
            </div>
        </Slider>
    )
}

export default MyCarousel
