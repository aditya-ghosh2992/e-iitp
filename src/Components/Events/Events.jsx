import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Events.css';
import gallery_1 from '../../assets/gallery-4.jpg';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-6.jpg';
import gallery_4 from '../../assets/gallery-7.jpg';
import gallery_8 from '../../assets/gallery-8.jpg';
import gallery_9 from '../../assets/gallery-9.jpg';
import gallery_10 from '../../assets/gallery-10.jpg';
import gallery_5 from '../../assets/gallery-5.jpg';

const Events = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className='events'>
            <Slider {...settings} className="gallery">
                <div><img src={gallery_1} alt="" /></div>
                <div><img src={gallery_2} alt="" /></div>
                <div><img src={gallery_3} alt="" /></div>
                <div><img src={gallery_4} alt="" /></div>
                <div><img src={gallery_8} alt="" /></div>
                <div><img src={gallery_9} alt="" /></div>
                <div><img src={gallery_10} alt="" /></div>
                <div><img src={gallery_5} alt="" /></div>
            </Slider>
            <Link to="/gallery">
                <button className='btn dark-btn'>See more here</button>
            </Link>
        </div>
    );
}

export default Events;
