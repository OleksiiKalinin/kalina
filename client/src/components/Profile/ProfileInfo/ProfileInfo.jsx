import React from 'react';
import './ProfileInfo.css';
// import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    // if (!props.profile) {
    //     return <Preloader />
    // }

    return (
        <>
            <div>
                <img alt='' src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={'description'}>
                <img alt='' src={props.profile.photos.large} />
                ava + description
            </div>
        </>
    )
}

export default ProfileInfo;