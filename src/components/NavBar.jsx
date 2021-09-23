import {Link} from 'react-router-dom'

function NavBar() {
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
                        <Link to = "/">LogOut</Link>
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
