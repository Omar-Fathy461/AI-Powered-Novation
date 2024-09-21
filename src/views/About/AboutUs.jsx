//components
import Heading from '../../components/common head/heading'
import IdeasSection from '../../components/About Ideas/IdeasSection'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import IntelligentSolutions from '../../components/Intelligent Solutions/IntelligentSolutions'
import Service from '../../components/Service Creative/Service'
import Benefit from '../../components/Our Benefit/Benefit'
import OurLeader from '../../components/Meet our leader/OurLeader'

//style
import './about.scss'

const AboutUs = () => {
    return (
        <div>
            <Heading page="About Us" heading='About Us' text="Learn more about our digital agency and what sets us apart. Discover our story, our mission, and our passion for creativity and innovation." />
            <IdeasSection />
            <BrandSlider />
            <IntelligentSolutions />
            <Service />
            <Benefit />
            <OurLeader />
        </div>
    )
}

export default AboutUs