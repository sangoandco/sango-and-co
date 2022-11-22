import React from "react";

function Profile(x) {

    console.log('juice: ', x.user.name)

    return (
        <div>
            <img src={x.user.picture} alt={x.user.name} />
            <h2>{x.user.name}</h2>
            <p>!{x.user.email}</p>
        </div>
    )
}

export default Profile;