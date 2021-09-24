function ProfileCard(props) {
    console.log(props.profileData) 
    return(
        <div>
            <p>{props.profileData.profile_pic}</p>
            <p>{props.profileData.name}</p>
            <p>{props.profileData.age}</p>
            <p>{props.profileData.about}</p>
            <p>{props.profileData.roommate_preferences}</p>
            <p>{props.profileData.favorite_listings}</p>
        </div>
    )
}

export default ProfileCard