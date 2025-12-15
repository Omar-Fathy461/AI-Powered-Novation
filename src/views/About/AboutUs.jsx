//components
import Heading from '../../components/commonHead/Heading'
import IdeasSection from '../../components/AboutIdeas/IdeasSection'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import IntelligentSolutions from '../../components/IntelligentSolutions/IntelligentSolutions'
import Service from '../../components/ServiceCreative/Service'
import Benefit from '../../components/OurBenefit/Benefit'
import OurLeader from '../../components/MeetOurleader/OurLeader'

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