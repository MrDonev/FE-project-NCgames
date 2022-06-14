

const SingleReviewTab=({review})=>{
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
        <p>Votes {review.votes}</p>
        <button>View comments</button>
        <button>Upvote</button>
        <button>Downvote</button>
        </div>
    )
    }
    
    export default SingleReviewTab;