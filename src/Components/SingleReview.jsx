import { useEffect, useState } from "react";
import { patchVote } from "../util/api";

const SingleReviewTab=({review})=>{
    const [buttonDisabled,setButtonDisabled]=useState(false)
const [votes,setVotes]=useState(review.votes);

const updateVotes=(value,id)=>{
    setButtonDisabled((isDisabled)=>!isDisabled)
  value > 0 ? setVotes((votes)=>votes+1) : setVotes((votes)=>votes-1)
  patchVote(value,id).then(({updatedReview})=>{
  }).catch((err)=>{
    value > 0 ? setVotes((votes)=>votes-1) : setVotes((votes)=>votes+1)
    alert(`There was something wrong with the data! Try again!`)
  })
}
useEffect(()=>{
  setVotes(review.votes)
},[review.votes])
    return (
        <div className="ReviewCard">
        <div className="ReviewIMG">
            <img src={review.review_img_url} alt={review.title}/>
        </div>
        <section className="pTag">
        <p>Owner: {review.owner}</p>
        <p>Category: {review.category}</p>
        <p>Created at: {review.created_at}</p>
        <p>Title: {review.title}</p>
        </section>
        <section className="singleReview">
        <p>Review: {review.review_body}</p>
        </section>
        <p>Comments: {review.comment_count}</p>
        <p>Votes {votes===0 ? review.votes : votes}</p>
        <button>View comments</button>
        <button disabled={buttonDisabled} onClick={()=>updateVotes(1,review.review_id)}>⬆️ Upvote</button>
        <button disabled={buttonDisabled} onClick={()=>updateVotes(-1,review.review_id)}>⬇️ Downvote</button>
        </div>
    )
    }
    
    export default SingleReviewTab;