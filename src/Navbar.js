import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="nav-wrapper">
            <div className="links">
                <NavLink className="menu" to ="/">Home</NavLink>
                <NavLink className="menu" to ="/about">About</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;