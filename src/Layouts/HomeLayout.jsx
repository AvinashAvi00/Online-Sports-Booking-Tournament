import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';

function HomeLayout({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="min-h-screen">
            <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
                <input className="drawer-toggle" id="my-drawer" type="checkbox" checked={isDrawerOpen} onChange={toggleDrawer} />
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu size={32} className="font-bold text-white m-4" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay" onClick={toggleDrawer}></label>
                    <ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative">
                        <li className="w-fit absolute right-2 z-50">
                            <button onClick={toggleDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/teams">Teams</Link>
                        </li>
                        <li>
                            <Link to="/profiles">Profiles</Link>
                        </li>
                        <li>
                            <Link to="/players">Players</Link>
                        </li>
                        <li>
                            <Link to="/tournaments">Tournaments</Link>
                        </li>
                        <li>
                            <Link to="/inventory">Inventory</Link>
                        </li>
                        <li>
                            <Link to="/games">Games</Link>
                        </li>
                        <li>
                            <Link to="/booking-slots">Booking Slots</Link>
                        </li>
                        <li>
                            <Link to="/miscellaneous">Miscellaneous</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {children}

            <Footer />
        </div>
    );
}

export default HomeLayout;
