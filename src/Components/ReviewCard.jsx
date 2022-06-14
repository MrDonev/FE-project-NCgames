
const ReviewCard = ({ reviewObj }) => {
 

  return (
    <div className="ReviewCard">
      <div className="ReviewIMG">
        <img src={reviewObj.review_img_url} alt={reviewObj.title} />
      </div>
      <p>Owner: {reviewObj.owner}</p>
      <p>Category: {reviewObj.category}</p>
      <p>Created at: {reviewObj.created_at}</p>
      <p>Title: {reviewObj.title}</p>
      <p>Comments: {reviewObj.comment_count}</p>
      <p>Votes {reviewObj.votes}</p>
      <button
        onClick={() =>
          (window.location.href = `/reviews/${reviewObj.review_id}`)
        }
      >
        Read review
      </button>
    </div>
  );
};

export default ReviewCard;
