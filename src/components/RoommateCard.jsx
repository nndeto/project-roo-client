function RoommateCard(props) {
    console.log(props)
   let image;

   if (props.img === "") {
       image = "https://i.imgur.com/UURwIOh.jpg"
   } else {
       image = props.img
   }

    return(
        <div className = "room-card"
            style = {{
            backgroundImage: `url(${image})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"   
        }}
        >
            {/* <img src = {image} alt = "profile-headshot" /> */}
            <p className = "room-top-left">{props.singleName}</p>
        </div>
    )
}

export default RoommateCard