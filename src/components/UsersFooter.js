import { Link } from "react-router-dom";

export const UsersFooter = ({ pageNumber }) => {
    if (pageNumber === 1) {
      return (
        <div className="footer">
          <Link to={`/users?page=${pageNumber + 1}`}>Next</Link>
        </div>
      );
    } else {
      return (
        <div className="footer">
          <Link to={`/users?page=${pageNumber - 1}`}>Previous</Link>
          <Link to={`/users?page=${pageNumber + 1}`}>Next</Link>
        </div>
      );
    }
}
