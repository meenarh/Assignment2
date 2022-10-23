import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { getPageNumber } from "../utils/getPageNumber";
import { User } from "../components/User";
import { UsersFooter } from "../components/UsersFooter";
import { useSearchParams } from "react-router-dom";

function UsersProfile({ users }) {
  return users.map((user) => {
    return <User key={user.email} user={user} />;
  });
}

const Users = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params] = useSearchParams();
  const pageNumber = useMemo(() => getPageNumber(params), [params]);

  const getData = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(`https://randomuser.me/api/?results=30&page=${page}`);

    const details = data.results;
    if (page > 1 || details.length > 0) {
      setDetails((prev) => [...prev, ...details]);
    } else {
      setDetails(details);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!details.length && pageNumber !== 1) {
      // go to users page if no data
      window.location.href = "/users";
    }
  
    if (details.length / 30 < pageNumber) {
      getData(pageNumber);
    }
  }, [pageNumber]);

  const getCurrentPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 30;
    const endIndex = startIndex + 30;
    return details.slice(startIndex, endIndex);
  };

  const currentPageUsers = getCurrentPageData(pageNumber);
  const pageDataExists = currentPageUsers.length > 0;

  if (!pageDataExists && !isLoading) {
    return <div className="error">No data found</div>;
  }

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="">
      <UsersProfile users={getCurrentPageData(pageNumber)} />
      <UsersFooter pageNumber={pageNumber} />
    </div>
  );
};

export default Users;
