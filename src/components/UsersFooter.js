import { NavLink } from "react-router-dom";

export const UsersFooter = ({ pageNumber }) => {
    if (pageNumber === 1) {
      return (
        <div className="footer">
          <NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink>
        </div>
      );
    } else {
      return (
        <div className="footer">
          <NavLink to={`/users?page=${pageNumber - 1}`}>Previous</NavLink>
          <NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink>
        </div>
      );
    }
}
