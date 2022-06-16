import { useContext, useEffect, useState } from 'react';
import { postNewComment } from '../util/api';
import UserContext from '../util/Contexts';
const NewComment = (props) => {
  const {user} = useContext(UserContext);
  const review_id = props.review_id;
  const setViewComments = props.setFunctions[1];
  const [body, setComment] = useState('');
let username= user.username || ''
  const [commentObj, setCommentObj] = useState({});
console.log(commentObj)
  const handleSubmit = (event) => {
    if (body.length < 15 || username==='') {
      event.preventDefault()
      alert(`At least 15 characters needed to post comment`);
    } else {
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
        Comment:
        <input
          id="commentBody"
          type="text"
          value={body}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default NewComment;
