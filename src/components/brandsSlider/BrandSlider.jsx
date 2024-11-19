import { LazyLoadImage } from 'react-lazy-load-image-component';
import brand1 from '../../assets/images/beta-white.svg';
import brand2 from '../../assets/images/mian2-white.svg';
import brand3 from '../../assets/images/mian-white.svg';
import brand4 from '../../assets/images/genvi-white.svg';
import brand5 from '../../assets/images/mega-white.svg';

//style
import './brandSlider.scss'

const BrandSlider = () => {
    return (
        <div className="brands">
            <div className="logos_slide">
                <LazyLoadImage src={brand1} alt="logo" />
                <LazyLoadImage src={brand2} alt="logo" />
                <LazyLoadImage src={brand3} alt="logo" />
                <LazyLoadImage src={brand4} alt="logo" />
                <LazyLoadImage src={brand5} alt="logo" />
            </div>
            <div className="logos_slide">
                <LazyLoadImage src={brand1} alt="logo" />
                <LazyLoadImage src={brand2} alt="logo" />
                <LazyLoadImage src={brand3} alt="logo" />
                <LazyLoadImage src={brand4} alt="logo" />
                <LazyLoadImage src={brand5} alt="logo" />
            </div>
        </div>
    )
}

export default BrandSlider