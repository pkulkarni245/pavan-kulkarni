import { useState } from 'react';
import { SidebarData } from './SideMenuData';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

const Navbar = () => {
    const [sidebar, setSidenav] = useState(false);
    const showSidebar = () => setSidenav(!sidebar);
    return (
        <>
            <div className="sidenav">
                <a href="#">
                    <FaIcons.FaBars onClick={showSidebar} />
                </a>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <a href="#" className="menu-bars">
                            <MdIcons.MdClose />
                        </a>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cname}>
                                <a href={item.path}>
                                    {item.icon}
                                    <span className="nav-menu-item-text">{item.title}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
};

export default Navbar;