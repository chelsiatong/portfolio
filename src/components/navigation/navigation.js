import './navigation.scss';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className="sidebar" >
            <div className="sidebar__container" >
                <Link to="/" className="sidebar__initial" >cjt</Link>
                <div className="sidebar__header" >
                    <NavLink to="/" className="sidebar__nav">home</NavLink>
                    <NavLink to="/about" className="sidebar__nav" >about</NavLink>
                    <NavLink to="/projects" className="sidebar__nav" >projects</NavLink>
                    <NavLink to="/contact" className="sidebar__nav" >contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navigation;