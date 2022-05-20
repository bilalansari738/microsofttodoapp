import React from 'react';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mynavbar p-3">
            <a className="navbar-brand" href="#">To Do</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='search-div'>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-5" type="search" placeholder="Search" aria-label="Search" />
                </form>
            </div>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav fs-5">
                    <a className="nav-item nav-link active" href="#"><i className="bi bi-gear"></i><span className="sr-only"></span></a>
                    <a className="nav-item nav-link active" href="#"><i className="bi bi-send"></i></a>
                    <a className="nav-item nav-link active" href="#"><i className="bi bi-person-circle"></i></a>
                </div>
            </div>
        </nav>
    )
}

