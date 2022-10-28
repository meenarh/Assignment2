export const UsersFooter = ({ pageNumber, onClickNextPage, onClickPreviousPage }) => {
    if (pageNumber === 1) {
      return (
        <div className="footer">
          <button className="nxt-btn" onClick={onClickNextPage}>Next</button>
        </div>
      );
    } else {
      return (
        <div className="footer">
          <button className="prev-btn" onClick={onClickPreviousPage}>Previous</button>
          <button className="nxt-btn" onClick={onClickNextPage}>Next</button>

          
        </div>
      );
    }
}
