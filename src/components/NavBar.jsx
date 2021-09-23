import {Link} from 'react-router-dom'
import UserModel from '../models/UserModel'

function NavBar() {
    function onClick() {
        return UserModel.logMeOut()
    }

    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        {/* listing index page */}
                        <Link to = "/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to = "/add-a-listing">Add a Listing</Link>
                    </li>
                    <li>
                    
                        <Link to = "/login">Login</Link>
                    </li>
                    <li>
                        <Link to = "/"><span onClick = {onClick}>Logout</span></Link> 
                    </li>
                    <li>
                        {/* static page */}
                        <Link to = "/frequently-asked-questions">FAQ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
