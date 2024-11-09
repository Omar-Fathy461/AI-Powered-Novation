import { useState, useEffect } from 'react';
import galleryData from './galleryData';
import './gallery.scss';

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [collection, setCollection] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);

    const toggleFilter = (button) => {
        setActiveBtn(button)
    }

    useEffect(() => {
        setGallery(galleryData);
        setCollection([...new Set(galleryData.map((el) => el.type))]);
        toggleFilter('all')
    }, []);

    const filter = (type) => {
        const filterImages = galleryData.filter((el) => el.type.includes(type));
        setGallery(filterImages);

    };

    return (
        <div className="gallerySection">
            <h2 className='text-center py-4'>Our Gallery of Innovative Artworks</h2>
            <div className="container">
                <div className='filterItems'>
                    <ul>
                        <li><button className={activeBtn === 'all' ? 'active' : ''} onClick={() => {
                            setGallery(galleryData)
                            toggleFilter('all')
                        }}
                        >All
                        </button></li>

                        <li><button className={activeBtn === 'anime' ? 'active' : ''} onClick={() => {
                            filter("anime")
                            toggleFilter('anime')
                        }}>Anime
                        </button></li>


                        <li><button className={activeBtn === 'creative' ? 'active' : ''} onClick={() => {
                            filter("creative")
                            toggleFilter('creative')
                        }}
                        >Creative
                        </button></li>

                        <li><button className={activeBtn === 'pixel' ? 'active' : ''} onClick={() => {
                            filter("pixel")
                            toggleFilter('pixel')
                        }}
                        >Pixel
                        </button></li>

                        <li><button className={activeBtn === 'illustration' ? 'active' : ''} onClick={() => {
                            filter("illustration");
                            toggleFilter('illustration')
                        }}
                        >Illustration
                        </button></li>
                    </ul>
                </div>
                <div className='galleryBox'>
                    {gallery.map((el) => (
                        <div className='cart' key={el.id}>
                            <img src={el.img} alt={el.type} />
                            <div className='imgTitle'>
                                <p>Marketting</p>
                                <h5>AI financial management</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
