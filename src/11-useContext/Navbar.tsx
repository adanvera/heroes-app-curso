import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <NavLink
                            className={
                                ({isActive}) => {
                                    if (isActive) {
                                        return "nav-link active"
                                    } else {
                                        return "nav-link"
                                }
                            }}
                            to="/main">
                            Main</NavLink>

                        <NavLink 
                        className={
                            ({isActive}) => {
                                if (isActive) {
                                    return "nav-link active"
                                } else {
                                    return "nav-link"
                            }
                        }}
                        to="/main">Home</NavLink>

                        <NavLink 
                        className={
                            ({isActive}) => {
                                if (isActive) {
                                    return "nav-link active"
                                } else {
                                    return "nav-link"
                            }
                        }}
                        to="/main">About</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
