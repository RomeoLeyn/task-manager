import { Link } from "react-router-dom";

import '../style/Header.css';

import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="logo">MyApp</Link>
                <div className="nav-links">
                    <button className="navbar-btn header-login" onClick={() => navigate('/login')}>Login</button>
                    <button className="navbar-btn header-register" onClick={() => navigate('/register')}>Register</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;