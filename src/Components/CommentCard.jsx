import { useState, useEffect, useContext } from 'react';
import { patchCommentVotes, deleteComment } from '../util/api';
import UserContext from '../util/Contexts';

const CommentCard = ({ comment, setComments }) => {
  const [votes, setVotes] = useState(comment.votes);
  const [upButtonDisabled, setUpButtonDisabled] = useState(false);
  const [downButtonDisabled, setDownButtonDisabled] = useState(false);
  const { user } = useContext(UserContext);

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
  const deleteCommentById = (id) => {
    if (window.confirm(`Are you sure you want to delete that comment?`)) {
      deleteComment(id)
        .then((data) => {
          setComments((currState)=>[...currState])
          alert(`Comment deleted!`)
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
      {user.username && comment.author === user.username ? (
        <button
          onClick={() => {
            deleteCommentById(comment.comment_id);
          }}
        >
          <span class="material-symbols-outlined">delete</span>
        </button>
      ) : null}
    </div>
  );
};

export default CommentCard;
