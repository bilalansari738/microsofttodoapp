import React, { useState } from 'react';
import './SideNavbar.css';

export default function SideNavbar() {
    const [showSide, setShowSide] = useState("sidenavbar");
    const [hideSideBar, setHideSideBar] = useState("false")
    const hideSideNavbar = () => {
        setShowSide("hidden");
        setHideSideBar(true);
    }
    const showSideNavbar = () => {
        setShowSide("sidenavbar");
        setHideSideBar(false);
    }
    return (
        <>
                <div className={showSide}>
                    <div>
                        <div className='p-4'>
                            <i className="bi bi-list list-icon" onClick={hideSideNavbar}></i>
                        </div>
                        <div className='navbar-links'>
                            <ul>
                                <li><a href="/"><i className="bi bi-sun"></i>&nbsp;&nbsp; My Day</a></li>
                                <li><a href="important"><i className="bi bi-star"></i>&nbsp;&nbsp; Important</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}
