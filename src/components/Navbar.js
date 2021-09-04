import React, { useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { sidebarData } from './SidebarData';
import { userData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import * as IoIcons from "react-icons/io";

 



function Navbar () {


// State pour la gestion de la Sidebar :

    const [sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


// Construction du Menu :
    const menuList = sidebarData.map ((e,i) => {
        return (
            <li key={i} className={e.cName}>
                <Link to={e.path}>
                    {e.icon} 
                    <span>{e.title}</span>
                </Link>
            </li>
        )})

 
// Exit Déconnexion : 
    const handleExit = () => {
        console.log('Deconnexion')
    };



// Return Composant : 

    return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>   
            <h1 className='zextend'>Zextend</h1>    
            <h3 className='profile'>{userData.name}</h3> 
            <Link to="#" className="exit">
                <IoIcons.IoMdExit onClick={handleExit}/>
            </Link>
        </div>

        <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
            <ul className='nav-menu-items' onClick={showSidebar} >
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar}/>
                        </Link>
                    </li>
                    {menuList}         
            </ul>
        </nav>
    </IconContext.Provider>
        
    </>
    )
}

export default Navbar;
