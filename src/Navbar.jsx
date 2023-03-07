import './navbar.css'; 
import { NavLink} from  "react-router-dom";

const NavBar = () =>{
   return (
        <div className="navbar">

         <nav > 
         <ul className="nav-links">
             <li><NavLink className="nav-link" to="/">Register</NavLink>
            </li>
            <li>
            <NavLink to={"/items"} className="nav-link">People</NavLink>
            </li>
            </ul>
            </nav>
            </div>
            )

};
export default NavBar;
