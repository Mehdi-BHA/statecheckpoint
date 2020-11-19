import React from 'react';


const Profile = (props) => {
    return (
        <div className="profile">
            <p>{props.person.fullName}</p>
            <p>{props.person.bio}</p>
            <img src={props.person.imgSrc} alt="pdp"/>
            <p>{props.person.profession}</p>
        </div>
    )}
    
        
;

export default Profile;