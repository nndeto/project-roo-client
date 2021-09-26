import '../css/Profile.scss'
import { SiTwitter } from 'react-icons/si'
import { SiFacebook } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'

function ProfileCard(props) {
    // console.log(props.profileData) 
    let imgSrc = props.profileData.profile_pic

    return(
        <div>
            <div className = "profile-banner">
                <img src = {`${imgSrc}` } className = "profile-pic" />
                <h2 className = "profile-name-person">{props.profileData.name}</h2>
                <p className = "age">{props.profileData.age}</p>
            </div>
            <div className = "profile-social-loggedin">
                        <a className = "profile-icon"
                            href = "https://www.facebook.com/"
                            target = "_blank">
                            <SiFacebook />
                        </a>
                        <a className = "profile-icon"
                            href = "https://www.instagram.com/"
                            target = "_blank">
                            <SiInstagram />
                        </a>
                        <a className = "profile-icon"
                            href = "https://twitter.com/"
                            target = "_blank">
                            <SiTwitter />
                        </a>
                    </div>
            <div className = "profile-bio">
                <h3 className = "profile-headers">Bio</h3>
                <p>{props.profileData.about}</p>
                <h3 className = "profile-headers">Roommate Preferences</h3>
                <p>{props.profileData.roommate_preferences}</p>
                <h3 className = "profile-headers">Favorited Listings</h3>
                <p>{props.profileData.favorite_listings}</p>
            </div>
        </div>
    )
}

export default ProfileCard