import { useState, useEffect } from 'react';
import { patchCommentVotes } from '../util/api';
const CommentCard = ({ comment }) => {
  const [votes, setVotes] = useState(comment.votes);
  const [upButtonDisabled, setUpButtonDisabled] = useState(false);
  const [downButtonDisabled, setDownButtonDisabled] = useState(false);

  const updateCommentVotes = (value, id) => {
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
        <p>{comment.body}</p>
      </section>
      <p>Votes {votes === 0 ? comment.votes : votes}</p>
      <button
        disabled={upButtonDisabled}
        onClick={() => {
          setUpButtonDisabled(true);
          if (upButtonDisabled !== downButtonDisabled) {
            setDownButtonDisabled(false);
          }
          updateCommentVotes(1, comment.comment_id);
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
          updateCommentVotes(-1, comment.comment_id);
        }}
      >
        <span className="material-symbols-outlined">thumb_down</span>
      </button>
    </div>
  );
};

export default CommentCard;
