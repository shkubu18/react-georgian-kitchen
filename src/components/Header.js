import { Link } from "react-router-dom";
import Logo from "../assets/icon/restaurant.svg"
import MenuBar from "../assets/icon/menu-bar.svg";
import HeaderStyle from "../styles/header.css"
import { useEffect, useState } from "react";

export default function Header() {
    const [transition, setTransition] = useState('');

    function click(transition) {
        setTransition(transition);
    }

    useEffect(() => {
        const nav = document.getElementById('nav');
        nav.style.transform = transition;
    }, [transition])
    
    return (
        <header>
            <div className="header-container">
                <Link to='/'>
                    <img className="restaurant-icon" src={Logo} alt="burger icon" />
                </Link>
                <nav id="nav">
                    <Link to='/' className="hovered-to-black">Home</Link>
                    <Link to='food-list' className="hovered-to-black">Food</Link>
                </nav>
                <div className="mobile-menu">
                    <span>Menu</span>
                    <img onClick={() => transition === 'translateY(-240px)' ? click('translateY(0)') : click('translateY(-240px)')} src={MenuBar} alt="menu bar" />
                </div>
            </div>
        </header>
    )

}