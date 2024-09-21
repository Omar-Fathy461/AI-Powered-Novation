import Buttons from '../../common/buttons';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import avatar1 from '../../assets/images/avatar1.png'
import avatar2 from '../../assets/images/avatar5.png'
import avatar3 from '../../assets/images/avatar3.png'
import './hero.scss'
const HeroSection = () => {
    return (
        <div className='heroSection'>
            <div className="container">
                <div className="content">
                    <div className="avatar">
                        <AvatarGroup
                            renderSurplus={(surplus) => <span className='numAvatars'>+{surplus.toString()[0]}M</span>}
                            total={5251000}
                        >
                            <Avatar alt="Avatar 1" src={avatar1} />
                            <Avatar alt="Avatar 2" src={avatar2} />
                            <Avatar alt="Avatar 3" src={avatar3} />
                        </AvatarGroup>
                        <p>Trusted by 50M+ People around the globe</p>
                    </div>
                    <h1>Transforming Businesses With AI-Powered Novation</h1>
                    <h2>Implement intelligent chatbots that can handle customer inquiries</h2>
                    <Buttons content="Explore More" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection