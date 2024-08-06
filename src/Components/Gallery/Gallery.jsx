

import React from 'react';
import './Gallery.css';
import gallery_1 from '../../assets/gallery-4.jpg';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-6.jpg';
import gallery_4 from '../../assets/gallery-7.jpg';
import gallery_8 from '../../assets/gallery-8.jpg';
import gallery_9 from '../../assets/gallery-9.jpg';
import gallery_10 from '../../assets/gallery-10.jpg';
import gallery_5 from '../../assets/gallery-5.jpg';


const Gallery = () => {
    return (
        <div className="gallery-page">
            <h1>Gallery</h1>
            <div className="gallery-grid">
                <img src={gallery_1} alt="Gallery 1" />
                <img src={gallery_2} alt="Gallery 2" />
                <img src={gallery_3} alt="Gallery 3" />
                <img src={gallery_4} alt="Gallery 4" />
                <img src={gallery_8} alt="Gallery 8" />
                <img src={gallery_9} alt="Gallery 9" />
                <img src={gallery_10} alt="Gallery 10" />
                <img src={gallery_5} alt="Gallery 5" />
            </div>
        </div>
    );
}

export default Gallery;
