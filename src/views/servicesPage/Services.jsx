import Heading from '../../components/commonHead/Heading'
import AISolutions from '../../components/AISolutions/AISolutions'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import Reviews from '../../components/ReviewsCommunity/Reviews'
import ContactFormPage from '../../components/ContactFormPage/ContactFormPage'
import AiChat from '../../components/AI-Chat/AiChat'

const Services = () => {

    return (
        <div>
            <Heading page='Services' heading='AI Chat bot' text='Join us on a journey to discover the full spectrum of AI chatbot solutions we offer, we are here to redefine the way you engage with AI ' />
            <AiChat />
            <AISolutions />
            <BrandSlider />
            <Reviews />
            <ContactFormPage />
        </div>
    )
}

export default Services