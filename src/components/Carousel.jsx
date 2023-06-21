import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import vue from '../assets/vue.svg'
import sass from '../assets/sass.svg'
import git from '../assets/git.svg'

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
                <img src={git} alt="Git Icon" />
            </div>
        </Slider>
    )
}

export default MyCarousel
