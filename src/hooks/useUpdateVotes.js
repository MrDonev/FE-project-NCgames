import { useState, useEffect } from 'react';
import { patchCommentVotes } from '../util/api';

export const useUpdateVotes = (value, id, reviewVotes) => {
  console.log(value, id, reviewVotes);
  const [votes, setVotes] = useState(reviewVotes);
  value > 0 ? setVotes((votes) => votes + 1) : setVotes((votes) => votes - 1);
  patchCommentVotes(value, id)
    .then((data) => {})
    .catch((err) => {
      value > 0
        ? setVotes((votes) => votes - 1)
        : setVotes((votes) => votes + 1);
      alert(`There was something wrong with the data! Try again!`);
    });
  // setButtonDisabled((isDisabled) => !isDisabled);

  return votes;
};
