import {Link} from 'react-router-dom'
import UserModel from '../models/UserModel'

function NavBar(props) {

    function onClick() {
        return UserModel.logMeOut()
    }
    // const loggedIn = props.loggedIn

    // let navItems; 
    // if (loggedIn) {
    //     navItems = (
    //         <>
    //             <li>
    //                 <Link to="/profile">Profile</Link>
    //             </li>
    //             <li>
    //                 <Link to = "/"><span onClick = {onClick}>Logout</span></Link> 
    //             </li>
    //         </>
    //     )
    // } else  {
    //     navItems = (
    //         <li>
    //             <Link to = "/login">Login</Link>
    //         </li>
    //     )
    // }

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
                        <Link to = "/roommates">Roommates</Link>
                    </li>
                    {/* {navItems} */}
                    {/* testing conditional rendering */}
                    {/* <li>
                        <Link to="/profile">Profile</Link>
                   </li> */}
                    <li>
                        <Link to = "/login">Login</Link>
                    </li>
                    <li>
                        <Link to = "/"><span onClick = {onClick}>Logout</span></Link> 
                    </li>
                    <li>
                        <Link to = "/frequently-asked-questions">FAQ</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
