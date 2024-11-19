import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/WhatsApp Image 2024-06-11 at 21.42.31_5ef99509.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './menuModal.scss'


const MenuModal = ({ setMenuOpen }) => {
    return (
        <div onClick={(e) => {
            if (e.target !== e.currentTarget) {
                return
            }
            setMenuOpen(false)
        }}
            style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "#000000c7"
            }}
        >
            <div className="MenuModal animate__animated animate__fadeInRight">
                <div className="menuHead">
                    <img src={logo} alt="" />
                    <FontAwesomeIcon icon={faX} style={{ cursor: 'pointer' }} onClick={() => setMenuOpen(false)} />
                </div>
                <div className="menuLinks">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink>
                    <NavLink to="/services" onClick={() => setMenuOpen(false)}>SERVICES</NavLink>
                    <NavLink to="/blogs" onClick={() => setMenuOpen(false)}>BLOG</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>ABOUT US</NavLink>
                    <NavLink to='/contact' onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MenuModal