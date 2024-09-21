import { Link } from 'react-router-dom'

//style
import './heading.scss'

const Heading = ({ page, text, heading }) => {
    return (
        <div className='heading'>
            <div className='content'>
                <div className='currentPage'>
                    <Link to="/" className='home'>Home</Link>
                    <Link to="/about">{page}</Link>
                </div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Heading