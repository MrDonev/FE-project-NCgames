import { useState, useEffect } from 'react';
import { patchCommentVotes } from '../util/api';
const CommentCard = ({ comment }) => {
  const [votes, setVotes] = useState(comment.votes);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const updateCommentVotes = (value, id) => {
    setButtonDisabled((isDisabled) => !isDisabled);
    value > 0 ? setVotes((votes) => votes + 1) : setVotes((votes) => votes - 1);
    patchCommentVotes(value, id)
      .then(({ updatedObj }) => {})
      .catch((err) => {
        value > 0
          ? setVotes((votes) => votes - 1)
          : setVotes((votes) => votes + 1);
        alert(`There was something wrong with the data! Try again!`);
      });
  };

  return (
    <div className="ReviewCard">
      <section className="pTag">
        <p>Author: {comment.author}</p>
        <p>Created at: {comment.created_at}</p>
      </section>
      <section className="singleReview">
        <p>Review: {comment.body}</p>
      </section>
      <p>Votes {votes === 0 ? comment.votes : votes}</p>
      <button
        disabled={buttonDisabled}
        onClick={() => updateCommentVotes(1, comment.comment_id)}
      >
        <span class="material-symbols-outlined">arrow_circle_up</span> Upvote
      </button>
      <button
        disabled={buttonDisabled}
        onClick={() => updateCommentVotes(-1, comment.comment_id)}
      >
        <span class="material-symbols-outlined">arrow_circle_down</span>Downvote
      </button>
    </div>
  );
};

export default CommentCard;
