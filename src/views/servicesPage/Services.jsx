// import { useState, useEffect } from 'react'

//components
import Heading from '../../components/common head/heading'
import AISolutions from '../../components/AI solutions/AISolutions'
import BrandSlider from '../../components/brandsSlider/BrandSlider'
import Reviews from '../../components/Reviews Community/Reviews'
import ContactFormPage from '../../components/Contact Form Page/ContactFormPage'
import AiChat from '../../components/AI-Chat/AiChat'
<<<<<<< HEAD
// import NotificationModal from '../../components/Notification/NotificationModal'
=======
>>>>>>> eb3cb1c82b0560254ab20d29ac2a2b4b7b17a669

const Services = () => {

    // const [isLogin, setIsLogin] = useState(false)

    // useEffect(() => {
    //     setIsLogin(true)
    // }, [])

    return (
        <div>
<<<<<<< HEAD
            <Heading page='Services' heading='AI Chat bot' text='Join us on a journey to discover the full spectrum of AI chatbot solutions we offer, we are here to redefine the way you engage with AI ' />
=======
            <Heading page='Services' heading='' text='' />
>>>>>>> eb3cb1c82b0560254ab20d29ac2a2b4b7b17a669
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