function RoommateCard(props) {
    // console.log(props)
    return(
        <div className = "room-card">
            <img src = "" alt = "profile-photo" />
            <p class = "top-left">{props.singleName}</p>
        </div>
    )
}

export default RoommateCard