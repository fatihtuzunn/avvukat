
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';


import styles from "./Navbar.module.scss";
import { MenuItems } from "../../assets/MenuItems"
import Logo from '../Logo/Logo';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

function Navigation() {

    const [clicked, setClicked] = useState(false);


    const handleClick = () => {
        setClicked(
            prevClicked => !prevClicked
        );
    };

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })

    return (
        <nav className={styles.NavbarItems}>
            <Logo />
            <div className={styles.menuIcons} onClick={handleClick}>
                <i>{clicked ? "Open" : "Close"}</i>
            </div>

            <ul className={clicked ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                {MenuItems.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <a className={isDesktopOrLaptop ? styles.navLinks : styles.navLinksMobile} href={item.url}>

                                {item.title}
                            </a>
                        </li>
                    );
                })}
                <button> Sign Up</button>
            </ul>
        </nav >
    );

}

export default Navigation;