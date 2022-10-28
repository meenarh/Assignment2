import { NavLink } from "react-router-dom";

export const UsersFooter = ({ pageNumber }) => {
    if (pageNumber === 1) {
      return (
        <div className="footer">
          <button className="nxt-btn"><NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink></button>
        </div>
      );
    } else {
      return (
        <div className="footer">
          <button className="prev-btn"><NavLink to={`/users?page=${pageNumber - 1}`}>Previous</NavLink>
            </button>
          <button className="nxt-btn"><NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink></button>

          
        </div>
      );
    }
}
