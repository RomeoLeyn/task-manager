import { Link } from "react-router-dom";

import '../style/Header.css';

const Header = () => {

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="logo">MyApp</Link>
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registration</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;