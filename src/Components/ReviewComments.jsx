import { useEffect, useState } from "react"
import { getComments } from "../util/api"
import CommentCard from "./CommentCard"


const ReviewComments=({review_id})=>{
 const [comments,setComments]=useState([])
 const [loading, setLoading]=useState(true)
 useEffect(()=>{
  getComments(review_id).then(({commentsArray})=>{
    setComments(commentsArray)
    setLoading(false)
  })
 },[review_id])
    return (
        <>
        {loading ? <div className="loader">...Loading</div> : comments.length<1 ? <h2>No comments on that review</h2> : 
        <ul>
         {comments.map((comment)=>{
            return <li key={comment.created_at}> <CommentCard comment={comment}/></li>
         })}
          </ul>
        }
        </>
    )
}

export default ReviewComments