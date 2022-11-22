import React from "react";

function Profile(i) {

    return (
        <div>
            <img src={i.user.picture} alt={i.user.name} />
            <h2>{i.user.name}</h2>
            <p>{i.user.email}</p>
        </div>
    )
}

export default Profile;