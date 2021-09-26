import {Link} from 'react-router-dom'
import UserModel from '../models/UserModel'
import '../css/NavBar.scss'

function NavBar(props) {

    function onClick() {
        props.toggleLoggedIn()
        return UserModel.logMeOut()
    }
    const loggedIn = props.loggedIn

    let navItems; 
    if (loggedIn) {
        navItems = (
            <>
                <li>
                    <Link 
                        to={`/profile/${props.currentName}`} 
                        className = "link-style">
                            Profile
                    </Link>
                </li>
                <li>
                    <Link 
                        to = "/" 
                        className = "link-style">
                            <span onClick = {onClick}>Logout</span>
                    </Link> 
                </li>
            </>
        )
    } else  {
        navItems = (
            <li>
                <Link 
                    to = "/login" 
                    className = "link-style">
                        Login
                </Link>
            </li>
        )
    }

    return(
        <header className = "nav-header">
            <nav className = "nav-bar">
                <ul className = "nav-ul">
                    <li>
                        <Link 
                            to = "/" 
                            className = "link-style">
                                Home
                        </Link>
                    </li>
                    <li>
                        {/* listing index page */}
                        <Link   
                                to = "/locations" 
                                className = "link-style">
                                    Locations
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = "/add-a-listing" 
                            className = "link-style">
                                Add-A-Listing
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = "/roommates" 
                            className = "link-style">
                                Roommates
                        </Link>
                    </li>
                    {navItems}
                    <li>
                        <Link 
                            to = "/frequently-asked-questions" 
                            className = "link-style">
                                FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
