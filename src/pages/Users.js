import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { getPageNumber } from "../utils/getPageNumber";
import { User } from "../components/User";
import { UsersFooter } from "../components/UsersFooter";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarMobile from '../components/NavbarMobile'
import user from '../assets/lottie/card.json'
import Lottie from 'react-lottie'


function UsersProfile({ users }) {
  return users.map((user) => {
    return <User key={user.email} user={user} />;
  });
}

const Users = () => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: user,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const pageNumber = useMemo(() => getPageNumber(params), [params]);

  const getData = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=7&page=${page}`
    );

    const details = data.results;
    if (page > 1 || details.length > 0) {
      setUsers((prev) => [...prev, ...details]);
    } else {
      setUsers(details);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!users.length && pageNumber !== 1) {
      // go to users page if no data
      window.location.href = "/users";
    }

    if (users.length / 6 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber, users.length]);

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 6;
    const endIndex = startIndex + 6;
    return users.slice(startIndex, endIndex);
  };

  const currentPageUsers = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageUsers.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return (
      <div className="loading">
        Please wait, your request is being processed....
      </div>
    );
  }

  return (
    <div className="User-Page">
      <Navbar />
      <div className="left">
      <Lottie options={defaultOptions}  width={400} height={400} />
        <div className="user-container">
          <UsersProfile users={getCurrentPageData(pageNumber)} />
        </div>
        <UsersFooter pageNumber={pageNumber} />
      <NavbarMobile />
      </div>

    </div>
  );
};

export default Users;
