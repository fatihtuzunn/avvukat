
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';


import { Component } from "react";
import styles from "./Navbar.module.scss";
import { MenuItems } from "../../assets/MenuItems"
import Logo from '../Logo/Logo';

class Navigation extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        });
    };
    render() {
        return (
            <nav className={styles.NavbarItems}>
                <Logo />
                <div className={styles.menuIcons} onClick={this.handleClick}>
                    <i>{this.state.clicked ? "Open" : "Close"}</i>
                </div>

                <ul className={this.state.clicked ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                    {MenuItems.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <a className={item.cName} href={item.url}>

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
}

export default Navigation;