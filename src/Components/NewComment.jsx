import { useContext, useEffect, useState } from 'react';
import { postNewComment } from '../util/api';
import UserContext from '../util/Contexts';
const NewComment = (props) => {
  const { user } = useContext(UserContext);
  const review_id = props.review_id;
  const setViewComments = props.setFunctions[1];
  const [body, setComment] = useState('');
  let username = user.username || '';
  const [commentObj, setCommentObj] = useState({});
  const textArea=document.getElementById('commentBody')
  const warning=document.getElementById('textAreaWarning')

  const handleSubmit = (event) => {
    if (body.length < 15 || username === '') {
      event.preventDefault();
      textArea.style.border='1px solid red'
      warning.style.display='block'
    } else {
      textArea.style.border='1px solid green'
      setCommentObj({ username, body });
      event.preventDefault();
    }
  };
  useEffect(() => {
    commentObj.body
      ? postNewComment(review_id, commentObj).then((data) => {
          setViewComments(true);
          alert(`Successfully posted a comment!`);
        })
      : console.log(`no object`);
  }, [commentObj, review_id]);

  return !user.username ? (
    <p>In order to post a comment, you must be logged in!</p>
  ) : (
    <form className="addComment" onSubmit={handleSubmit}>
      <label>
        <textarea
          id="commentBody"
          type="text"
          word-break='break-word'
          value={body}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </label>
    <p id='textAreaWarning'>Comments must contain at least 15 characters</p>
      <input type="submit" />
    </form>
  );
};

export default NewComment;
