import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {

  const [details, setDetails] = useState([]);

  const getData = async () => {
    const {data} = await axios.get("https://randomuser.me/api/?results=5");
    console.log(data.results);

    const details = data.results
    setDetails(details)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    
      details.map((values) => {
        return(
          <div className="card" key={values.id}>
      <p>Username: {values.name?.title}. {values.name?.first}</p>
      <p>Email : {values.email}</p>
      <p>Address: {values.location?.city}</p>
      <p>Phone: {values.phone}</p>
      <p>
        Image:
        <img
          src={values.picture?.medium}
          alt="UserImage"
          style={{ width: "200px;", height: "200px", borderRadius: '50%' }}
        />
      </p>
    </div>
        )
        
      })
    
    
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
