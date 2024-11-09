//components
import HeroSection from '../../components/hero section/HeroSection'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import About from '../../components/aboutSection/About'
import AiFeatures from '../../components/aiFeatures/AiFeatures'
import AIVideo from '../../components/aiVideo/AIVideo'
import Reviews from '../../components/Reviews Community/Reviews'
import IntelligentSolutions from '../../components/Intelligent Solutions/IntelligentSolutions'
import Questions from '../../components/Questions  Section/Questions'
import FormSendMessage from '../../components/Get In Touch/FormSendMessage'
import Gallery from '../../components/Gallery/Gallery'
import FindPlan from '../../components/plans/FindPlan'
import TextSlider from '../../components/textSlider/TextSlider'
import BlogSlider from '../../components/Slider/BlogSlider'


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
            <Gallery />
            <FindPlan />
            <Questions />
            <BlogSlider />
            <FormSendMessage />
        </div>
    )
}

export default Home