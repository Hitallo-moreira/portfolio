import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const MyCarousel = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
    }

    return (
        <Slider {...settings}>
            <div>
                <img src={github} alt="" />
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
            <div>
                <img src={github} alt="" />
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
                        <div>
                <img src={github} alt="" />
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
            <div>
                <img src={github} alt="" />
            </div>
            <div>
                <img src={linkedin} alt="" />
            </div>
        </Slider>
    )
}

export default MyCarousel
