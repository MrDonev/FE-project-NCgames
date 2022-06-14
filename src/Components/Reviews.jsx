import { getAllReviews } from "../util/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = ()=>{
  const {category}=useParams()
  const [singleReview, setSingleReview]=useState({})
   const [reviews, setReviews]=useState([])
   const [loading, setLoading]=useState(true)

   useEffect(()=>{
    getAllReviews(category).then((allReviews)=>{
      if(Array.isArray(allReviews.reviewsArr)){
        setReviews(allReviews.reviewsArr)
        setLoading(false)
      } else {
        setSingleReview(allReviews.reviewObj);
        setLoading(false)
      }
    }).catch((err)=>{
      console.dir(err)
    })
   },[category])
  console.log(isNaN(Number(category)))
    return ( (loading) ? <div className="loader">...Loading</div> : (isNaN(Number(category)))?
    <main className="Main">
        <ul>
      {reviews.map(review=>{
       return <li key={review.title}><ReviewCard reviewObj={review}/></li>
      })}
      </ul>
    </main>:
    <div className="ReviewCard">
    <div className="ReviewIMG">
        <img src={singleReview.review_img_url} alt={singleReview.title}/>
    </div>
    <section className="pTag">
    <p>Owner: {singleReview.owner}</p>
    <p>Category: {singleReview.category}</p>
    <p>Created at: {singleReview.created_at}</p>
    <p>Title: {singleReview.title}</p>
    </section>
    <section className="singleReview">
    <p>Review: {singleReview.review_body}</p>
    </section>
    <p>Comments: {singleReview.comment_count}</p>
    <p>Votes {singleReview.votes}</p>
    <button>View comments</button>
    <button>Upvote</button>
    <button>Downvote</button>
   {/* <Link to={`/reviews/${singleReview.review_id}`}>Read review</Link> */}
    </div>
        )
}

export default Reviews;