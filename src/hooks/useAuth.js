import { useState, useEffect, createContext, useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isSignedIn, setIsSignedIn] = useState(0);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const setUserFromToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    console.log('Decoded token on mount:', decodedToken);
                    setUser(decodedToken);
                    setIsSignedIn(1);
                } catch (error) {
                    console.error('Error decoding token:', error);
                }
            }
            setLoading(false);
        };
        setUserFromToken();
    }, []);

    const logined = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            setUser(decodedToken);
            setIsSignedIn(1);
            localStorage.setItem('token', token);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsSignedIn(0);
        navigate('/');
    };

    const isTokenValid = () => {
        const token = localStorage.getItem('token');
        if (!token) return false;

        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decodedToken.exp > currentTime;
        } catch (error) {
            console.error('Invalid token:', error);
            navigate('/');
            return false;
        }
    };

    return (
        <AuthContext.Provider value={{ user, logined, logout, isSignedIn, isTokenValid, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
