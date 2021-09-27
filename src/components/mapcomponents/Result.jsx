import React from 'react'

function Result(props) {
        return(
            <div>
                <img 
                    src ={props.showMap}
                    alt = "Location Address"
                    className = "map-container"
                />
            </div>
        )
}

export default Result