import React from 'react';


const Profile = (props) => {
    return (
        <div className="profile">
            <p>Nom: {props.person.fullName}</p>
            <p>Bio: {props.person.bio}</p>
            <img src={props.person.imgSrc} alt="pdp"/>
            <p>Profession: {props.person.profession}</p>
        </div>
    )}
    
        
;

export default Profile;