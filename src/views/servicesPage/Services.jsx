// import { useState, useEffect } from 'react'

//components
import Heading from '../../components/commonHead/Heading'
import AISolutions from '../../components/AISolutions/AISolutions'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import Reviews from '../../components/ReviewsCommunity/Reviews'
import ContactFormPage from '../../components/ContactFormPage/ContactFormPage'
import AiChat from '../../components/AI-Chat/AiChat'
// import NotificationModal from '../../components/Notification/NotificationModal'

const Services = () => {

    // const [isLogin, setIsLogin] = useState(false)

    // useEffect(() => {
    //     setIsLogin(true)
    // }, [])

    return (
        <div>
            <Heading page='Services' heading='AI Chat bot' text='Join us on a journey to discover the full spectrum of AI chatbot solutions we offer, we are here to redefine the way you engage with AI ' />
            <AiChat />
            <AISolutions />
            <BrandSlider />
            <Reviews />
            <ContactFormPage />
            {/* {isLogin && <NotificationModal setIsLogin={setIsLogin} />} */}
        </div>
    )
}

export default Services