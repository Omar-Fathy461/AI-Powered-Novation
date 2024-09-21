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
                <img src={brand1} alt="logo" />
                <img src={brand2} alt="logo" />
                <img src={brand3} alt="logo" />
                <img src={brand4} alt="logo" />
                <img src={brand5} alt="logo" />
            </div>
            <div className="logos_slide">
                <img src={brand1} alt="logo" />
                <img src={brand2} alt="logo" />
                <img src={brand3} alt="logo" />
                <img src={brand4} alt="logo" />
                <img src={brand5} alt="logo" />
            </div>
        </div>
    )
}

export default BrandSlider