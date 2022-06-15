import { useEffect, useState } from 'react';
import { postNewComment } from '../util/api';

const NewComment = (props) => {
    const review_id=props.review_id;
    const setViewComments=props.setFunctions[1];
  const [body, setComment] = useState('');
  const [username, setUsername] = useState('');
  const [commentObj, setCommentObj] = useState({});

  const handleSubmit = (event) => {
      setCommentObj({ username, body });
      event.preventDefault();
  };
  useEffect(()=>{
   commentObj.username ? postNewComment(review_id, commentObj).then((data) => {
      setViewComments(true)
      }) : console.log(`no object`)
  },[commentObj,review_id])
  return (
    <form className="addComment" onSubmit={handleSubmit}>
      <label>
        Enter username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
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
