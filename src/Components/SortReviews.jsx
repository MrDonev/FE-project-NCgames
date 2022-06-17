const SortReviews = (props) => {
  const setSortBy = props.setSortBy;
  const setOrderBy = props.setOrderBy;

  return (
    <>
      <form id='sorting'>
        <label>
          Sort by:
          <select onChange={(e)=>{setSortBy(e.target.value)}}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select onChange={(e)=>{setOrderBy(e.target.value || 'desc')}}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>

      </form>
    </>
  );
};
export default SortReviews;
