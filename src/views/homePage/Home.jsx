//components
import HeroSection from '../../components/HeroSection/HeroSection'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import About from '../../components/aboutSection/About'
import AiFeatures from '../../components/aiFeatures/AiFeatures'
import AIVideo from '../../components/aiVideo/AIVideo'
import Reviews from '../../components/ReviewsCommunity/Reviews'
import IntelligentSolutions from '../../components/IntelligentSolutions/IntelligentSolutions'
import Questions from '../../components/QuestionsSection/Questions'
import FormSendMessage from '../../components/GetInTouch/FormSendMessage'
import Gallery from '../../components/Gallery/Gallery'
import FindPlan from '../../components/plans/FindPlan'
import BlogSlider from '../../components/Slider/BlogSlider'
import AiChat from '../../components/AI-Chat/AiChat'


//style
import './home.scss'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AiChat />
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