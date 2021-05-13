
import React from 'react';
import profile_photo from '../../assets/images/profile_photo.png';

import './styles.scss';

const UserProfile = ({ data }) => {

    return (
        <>
            <div className="user">
                <div className="user__photo">
                    <img src={profile_photo} alt='hello'></img>
                </div>
                <div className="user__name"><strong>User</strong></div>
                <br></br>
                <div className="user__email"><strong>Email:</strong> {data.email}</div>
                <br></br>
                <div className="user__description"><strong>About me: </strong> I absolutely love cooking.
                I can merrily state that my kitchen is my playground in every sense! My mother has always been a wonderful cook,
                 and I feel she is my inspiration. I have seen her prepare scrumptious meals for hundreds of guests in a few hours!
                Honestly, I find cooking very therapeutic and look forward to planning my meals every day.
                </div>
            </div>
        </>
    )
}
export default UserProfile;