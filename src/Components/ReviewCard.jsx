import { Link } from 'react-router-dom';

const ReviewCard = ({ reviewObj }) => {
  const date = new Date(reviewObj.created_at);
  return (
    <div className="cardContainer">
      <div className="cardImgContainer">
        <img src={reviewObj.review_img_url} alt={reviewObj.title} />
      </div>
      <p id='cardOwner'>Owner: {reviewObj.owner}</p>
      <p id='cardTitle'>{reviewObj.title}</p>
      <p id='cardDate'>Created at: {date.toLocaleString()}</p>
      <p id='cardCategory'>Category: {reviewObj.category}</p>
      <p id='cardComments'>Comments: {reviewObj.comment_count}</p>
      <p id='cardVotes'>Votes: {reviewObj.votes}</p>
      <Link to={`/reviews/${reviewObj.review_id}`}>
        <button>
          {' '}
          <span className="material-symbols-outlined">view_timeline</span>Read
          review
        </button>
      </Link>
    </div>
  );
};

export default ReviewCard;
