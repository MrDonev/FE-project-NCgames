const SortReviews = (props) => {
  const setSortBy = props.setSortBy[1];
  const setOrderBy = props.setOrderBy[1];

  function handleSubmit(e) {
    e.preventDefault();
    setSortBy(e.target[0].value || null);
    setOrderBy(e.target[1].value || null);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Sort by:
          <select>
            <option value="">Attributes</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
          <select>
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <input type="submit"></input>
      </form>
    </>
  );
};
export default SortReviews;
