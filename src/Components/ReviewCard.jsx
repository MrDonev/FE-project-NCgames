import { Link } from 'react-router-dom';

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
      <Link to={`/reviews/${reviewObj.review_id}`}>
        <button> <span class="material-symbols-outlined">view_timeline</span>Read review</button>
      </Link>
    </div>
  );
};

export default ReviewCard;
