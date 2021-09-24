//this will be my landing page wireframe
import NavBar from "../components/NavBar";


function HomePage(props) {
    // console.log(props)
    return (
        <main>
            <NavBar 
                // loggedIn = {props.loggedIn}
                // toggleLoggedIn = {props.toggleLoggedIn}
            />
            <h1>Roo</h1>
        </main>
    )
}

export default HomePage;