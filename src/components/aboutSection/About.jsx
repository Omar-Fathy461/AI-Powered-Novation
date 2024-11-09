import aboutImg from '../../assets/images/item12.png'
//style
import './about.scss'

const About = () => {
    return (
        <div className='about-section'>
            <div className="container">
                <h2 className='about-title'>Our Impact In Numbers</h2>
                <p className='about-expl'>Implement intelligent chatbots that can handle customer inquiries</p>
                <div className="content">
                    <div className="about-img col-lg-6 col-md-12 col-sm-12">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-text col-lg-6 col-md-12 col-sm-12">
                        <div className='col-6'>
                            <h2>1.77K<span>+</span></h2>
                            <p>Business Problem</p>
                        </div>
                        <div className='col-6'>
                            <h2>2.3K<span>+</span></h2>
                            <p>Business Setup</p>
                        </div>
                        <div className='col-6'>
                            <h2>24K<span>+</span></h2>
                            <p>Goal Achiever</p>
                        </div>
                        <div className='col-6'>
                            <h2>198K<span>+</span></h2>
                            <p>Users Happey</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About