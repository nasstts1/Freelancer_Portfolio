import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/btnDarkMode";
import "./style.css";



const Navbar = () => {

const activeLink ="nav-list__link nav-list__link--active";
const normal ="nav-list__link";

    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                    <strong>Freelancer</strong> portfolio 
                </NavLink >
                
                <BtnDarkMode/>

                <ul className="nav-list">
                    
                    <li className="nav-list__item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? activeLink : normal; 
                        }}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/projects"  className={({isActive}) => {
                            return isActive ? activeLink : normal; 
                        }}>
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({isActive}) => {
                            return isActive ? activeLink : normal; 
                        }}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
     );
}
 
export default Navbar;