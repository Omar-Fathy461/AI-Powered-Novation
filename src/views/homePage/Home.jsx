//components
import HeroSection from '../../components/heroSection/heroSection'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import About from '../../components/aboutSection/About'
import AiFeatures from '../../components/aiFeatures/AiFeatures'
import AIVideo from '../../components/aiVideo/AIVideo'
import Reviews from '../../components/Reviews Community/Reviews'
import IntelligentSolutions from '../../components/Intelligent Solutions/IntelligentSolutions'
import Questions from '../../components/Questions  Section/Questions'
import FormSendMessage from '../../components/Get In Touch/FormSendMessage'


//style
import './home.scss'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <BrandSlider />
            <About />
            <AiFeatures />
            <AIVideo />
            <Reviews />
            <IntelligentSolutions />
            <Questions />
            <FormSendMessage />
        </div>
    )
}

export default Home