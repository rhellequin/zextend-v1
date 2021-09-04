import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const userData = {
    name : 'Rémy Hellequin'
}


export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/> ,
        cName: 'nav-text'
    },
    {
        title: 'Articles',
        path: '/articles',
        icon: <FaIcons.FaBarcode/> ,
        cName: 'nav-text'
    },
    {
        title: 'OF',
        path: '/fabrications',
        icon: <MdIcons.MdBuild/> ,
        cName: 'nav-text'
    },
    {
        title: 'Stocks',
        path: '/stocks',
        icon: <FaIcons.FaDollyFlatbed/> ,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/> ,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoMdDocument/> ,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaRegEnvelope/> ,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/> ,
        cName: 'nav-text'
    }
]