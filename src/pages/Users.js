import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { getPageNumber } from "../utils/getPageNumber";
import { User } from "../components/User";
import { UsersFooter } from "../components/UsersFooter";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function UsersProfile({ users }) {
  return users.map((user) => {
    return <User key={user.email} user={user} />;
  });
}

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const pageNumber = useMemo(() => getPageNumber(params), [params]);

  const getData = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(`https://randomuser.me/api/?results=9&page=${page}`);

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
  
    if (users.length /9 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber, users.length]);

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 9;
    const endIndex = startIndex + 9;
    return users.slice(startIndex, endIndex);
  };

  const currentPageUsers = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageUsers.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return <div className="loading">Please wait, your request is being processed....</div>;
  }

  return (
    <div className="User-Page">
      <Navbar />
      <div className="card-container">
      <UsersProfile users={getCurrentPageData(pageNumber)} />
      <UsersFooter pageNumber={pageNumber} />
      </div>
    </div>
  );
};

export default Users;
