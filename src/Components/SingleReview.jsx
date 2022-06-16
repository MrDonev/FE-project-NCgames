import { useEffect, useState } from 'react';
import { patchVote } from '../util/api';
import NewComment from './NewComment';
import ReviewComments from './ReviewComments';

const SingleReviewTab = ({ review }) => {
  const [upButtonDisabled, setUpButtonDisabled] = useState(false);
  const [downButtonDisabled, setDownButtonDisabled] = useState(false);
  const [votes, setVotes] = useState(review.votes);
  const [viewComments, setViewComments] = useState(false);
  const [addComment, setAddComment] = useState(false);

  const updateVotes = (value, id) => {
    value > 0 ? setVotes((votes) => votes + 1) : setVotes((votes) => votes - 1);
    patchVote(value, id)
      .then((data) => {})
      .catch((err) => {
        value > 0
          ? setVotes((votes) => votes - 1)
          : setVotes((votes) => votes + 1);
        alert(`There was something wrong with the data! Try again!`);
      });
  };

  useEffect(() => {
    setVotes(review.votes);
    setAddComment(false);
  }, [review.votes, review.comment_count]);
const date= new Date(review.created_at)
  return (
    <div className="ReviewCard">
      <div className="ReviewIMG">
        <img src={review.review_img_url} alt={review.title} />
      </div>
      <section className="pTag">
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>Created at: {date.toLocaleString()}</p>
        <p>Title: {review.title}</p>
      </section>
      <section className="singleReview">
        <p>Review: {review.review_body}</p>
      </section>
      <p>Comments: {review.comment_count}</p>
      <p>Votes {votes === 0 ? review.votes : votes}</p>
      <button
        onClick={() => {
          setViewComments((toggle) => !toggle);
          setAddComment(false);
        }}
      >
        <span className="material-symbols-outlined">view_timeline</span>View
        comments
      </button>
      <button
        onClick={() => {
          setViewComments(false);
          setAddComment(true);
        }}
      >
        <span className="material-symbols-outlined">rate_review</span>Add
        comment
      </button>
      <button
        disabled={upButtonDisabled}
        onClick={() => {
          setUpButtonDisabled(true);
          if (upButtonDisabled !== downButtonDisabled) {
            setDownButtonDisabled(false);
          }
          updateVotes(1, review.review_id);
        }}
      >
        <span className="material-symbols-outlined">thumb_up</span>
      </button>
      <button
        disabled={downButtonDisabled}
        onClick={() => {
          setDownButtonDisabled(true);
          if (upButtonDisabled !== downButtonDisabled) {
            setUpButtonDisabled(false);
          }
          updateVotes(-1, review.review_id);
        }}
      >
        <span className="material-symbols-outlined">thumb_down</span>
      </button>
      <section>
        {viewComments ? <ReviewComments review_id={review.review_id} /> : null}
        {addComment ? (
          <NewComment
            review_id={review.review_id}
            setFunctions={[viewComments, setViewComments]}
          />
        ) : null}
      </section>
    </div>
  );
};

export default SingleReviewTab;
