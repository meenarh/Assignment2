import { NavLink } from "react-router-dom";

export const UsersFooter = ({ pageNumber }) => {
    if (pageNumber === 1) {
      return (
        <div className="footer">
          <button><NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink></button>
        </div>
      );
    } else {
      return (
        <div className="footer">
          <button><NavLink to={`/users?page=${pageNumber - 1}`}>Previous</NavLink>
            </button>
          <button><NavLink to={`/users?page=${pageNumber + 1}`}>Next</NavLink></button>

          
        </div>
      );
    }
}
