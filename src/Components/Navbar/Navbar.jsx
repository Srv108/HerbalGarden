import logo from "../../assets/logo.png"
import Home from "../Pages/Home";
import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/terms");
    }

    const homeClick = () => {
        navigate("/");
    }
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <img src={logo} alt=""  className="h-11" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li className="" onClick={homeClick}><a>Home</a></li>
                <li><a>Details</a></li>
                <li><a>Features</a></li>
                <li><a>Fact</a></li>
                <li><a>Herbs</a></li>
                <li onClick={handleClick}><a>Terms Condition</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;