import React from "react";
import image from "../assets/Aminat.jpg";

function UserProfile() {
  return (
    <div className="card">
      <p>Username: Aminat</p>
      <p>Email : aminatobi@gmail.com</p>
      <p>Address: Ikorodu, Lagos</p>
      <p>Phone: 0811223355</p>
      <p>
        Image:
        <img
          src={image}
          alt="UserImage"
          style={{ width: "200px;", height: "200px" }}
        />
      </p>
    </div>
  );
}

const User = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default User;
