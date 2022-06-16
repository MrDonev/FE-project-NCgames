const SortReviews = (props) => {
  const setSortBy = props.setSortBy;
  const setOrderBy = props.setOrderBy;

  return (
    <>
      <form>
        <label>
          Sort by:
          <select onChange={(e)=>{setSortBy(e.target.value)}}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select onChange={(e)=>{setOrderBy(e.target.value)}}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

      </form>
    </>
  );
};
export default SortReviews;
