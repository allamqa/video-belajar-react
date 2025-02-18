import 'boxicons';
import Icon from "../../Icon";
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from "react-redux";

const MenuNav = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const profile = useSelector((state) => state.profile.data);
    const [profilePicture, setProfilePicture] = useState(profile.profilePicture);

    useEffect(() => {
        setProfilePicture(profile.profilePicture);
      }, [profile.profilePicture]);
      
    useEffect(() => {
        const updateProfilePicture = () => {
            const storedProfile = localStorage.getItem("userProfile");
            if (storedProfile) {
                const { dataProfil } = JSON.parse(storedProfile);
                setProfilePicture(dataProfil.profilePicture || profilePicture); 
            }
        };

        updateProfilePicture(); 

    
        window.addEventListener('storage', updateProfilePicture);

        return () => {
            window.removeEventListener('storage', updateProfilePicture);
        };
    }, []);
    
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear(); 
    };

    return (
        <div className="menu-icon">
            <div className="menu-nav">
                <a href="/home">Kategori</a>
                <div className="relative">
                    <img 
                        src={profilePicture} 
                        alt="avatar" 
                        onClick={toggleDropdown} 
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    {isDropdownVisible && (
                        <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-3">
                            <Link to="/profil" className="block px-4 py-2 text-gray-800 hover:border-yellow-400 hover:bg-yellow-100 hover:text-yellow-600 my-1">Profil Saya</Link>
                            <Link to="/admin" className="block px-4 py-2 text-gray-800 hover:border-yellow-400 hover:bg-yellow-100 hover:text-yellow-600 my-1">Admin</Link>
                            <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:border-yellow-400 hover:bg-yellow-100 hover:text-yellow-600">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
            <div id="icon-navbar"><Icon logo="menu"></Icon></div>
        </div>
    );
}

export default MenuNav;
