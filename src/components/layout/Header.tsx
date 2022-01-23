import Logo from '../../../resources/logo.mp4'
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <Link to="/">
            <video className='header__logo' autoPlay muted src={Logo} title='David Valenzuela Martinez'>
                <source src={Logo} />
            </video>
            </Link>
            <div className='header__body'>
                <Link to="/Profil">Profil</Link>
                <hr />
                <Link to="/portfolio">Portfolio</Link>
                <hr />
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header;