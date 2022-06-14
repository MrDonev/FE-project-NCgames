import { useNavigate } from "react-router-dom";
const ReviewCard = ({ reviewObj }) => {
 let navigate=useNavigate();

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
         navigate(`/reviews/${reviewObj.review_id}`)
        }
      ><span class="material-symbols-outlined">
      view_timeline
      </span>
        Read review
      </button>
    </div>
  );
};

export default ReviewCard;
