import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom';
import { socials_list } from './ListData';
import projects_list from './projectData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {

    const [toggleMobileNav, setToggleMobileNav] = useState(false)

    const projectsEl = projects_list.map((item, index) => (
        <NavLink key={index} className="sidebar--text"
            style={({ isActive }) => isActive ? activeStyle : null}
            to={`/project/${item.id}`}
            onClick={() => setToggleMobileNav(false)}
        ><span><FontAwesomeIcon icon={item.logo} /></span>{item.text}</NavLink>
    ))

    const socialsEl = socials_list.map((item, index) => (
        <a key={index} className="sidebar--text"
            href={item.url}
            target='_blank'
        ><span><FontAwesomeIcon icon={item.logo} /></span>{item.text}</a>
    ))



    const activeStyle = {
        backgroundColor: 'rgb(145, 145, 145)'
    }

    // ${toggleMobileNav ? '' : 'gt1024'}


    return (
        <>
            <div className={`sidebar--container gt1024`}>
                <div className="sidebar--logo">
                    <NavLink to="/"><p>Jack Wang</p></NavLink>
                </div>
                <div className="sidebar--projects">
                    <span>Projects</span>
                    {projectsEl}
                </div>
                <div className="sidebar--social">
                    <span>Online</span>
                    {socialsEl}
                </div>
            </div>
            <div className="sidebar--mobileContainer lt1024">
                <span onClick={() => setToggleMobileNav(prev => !prev)}><FontAwesomeIcon icon={toggleMobileNav ? faArrowLeftLong : faArrowRightLong} /></span>
            </div>
            <div className={`sidebar--toggleBar lt1024 ${toggleMobileNav ? 'slideRight' : ''}`}>
                <div className="sidebar--logo togglebar">
                    <NavLink onClick={() => setToggleMobileNav(false)} to="/"><p>Jack Wang</p></NavLink>
                </div>
                <div className="sidebar--projects togglebar">
                    <span>Projects</span>
                    {projectsEl}
                </div>
                <div className="sidebar--social togglebar">
                    <span>Online</span>
                    {socialsEl}
                </div>
            </div>
        </>
    )
}

export default Sidebar