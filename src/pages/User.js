import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function UserProfile() {
  const [details, setDetails] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://randomuser.me/api/?results=30");
    console.log(data.results);

    const details = data.results;
    setDetails(details);
  };

  useEffect(() => {
    getData();
  }, []);

  return details.map((values) => {
    return (
      <>
        <div className="container">
          <div className="card" key={values.id}>
            <div className="card-img">
              <img
                className="card-image"
                src={values.picture?.medium}
                alt="ProfileImage"
              />
            </div>

            <div className="info">
              <p id="username">
                {values.name?.first}. {values.name?.last}
              </p>
              <p id="email"> {values.email}</p>
              <p id="add"> {values.location?.city}</p>
              <p id="num"> {values.phone}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
}

const User = () => {
  return (
    <div className="">
      <UserProfile />
    </div>
  );
};

export default User;
