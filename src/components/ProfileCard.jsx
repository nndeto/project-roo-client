function ProfileCard(props) {
    // console.log(props) 
    return(
        <div>
            <p>{props.profileObj}: {props.profileData[props.profileObj]} </p>
        </div>
    )
}

export default ProfileCard