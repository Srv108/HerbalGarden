import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import store from "../../Zustand/State"

function Navbar() {

    const {sectionRefs} = store();
    const navigate = useNavigate();

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleClick = () => {
        navigate("/terms");
    };

    const homeClick = () => {
        navigate("/");
    };

    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
            <div className="flex-1 pl-20">
                <img src={logo} alt="" className="h-11" />
            </div>
            <div className="flex-none pr-20">
                <ul className="menu menu-horizontal px-1">
                    <li className="" onClick={homeClick}><a>Home</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.searchingHerbRef)}><a>Details</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.exploreHerbsRef)}><a>Features</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.herbalEducationRef)}><a>Fact</a></li>
                    <li onClick={() => scrollToSection(sectionRefs.usersEntryRef)}><a>Users</a></li>
                    <li onClick={handleClick}><a>Terms Condition</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
