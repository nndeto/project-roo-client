import React from 'react'

function Result(props) {
        return(
            <div>
                <h3>I'm going to return the location</h3>
                <img 
                    src ={props.showMap}
                />
            </div>
        )
}

//will need to add alt text, but you can get that from the data later
//so fucking proud of you
//with my app
    //listing has an adress
    //i run a behind the scenes function that does all this by taking the address of the listing as a search term and renders the appropriate map
    //look into lifecycle
export default Result