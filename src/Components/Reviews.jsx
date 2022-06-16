import { getAllReviews } from '../util/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import SingleReviewTab from './SingleReview';

const Reviews = () => {
  const { category } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllReviews(category)
      .then((allReviews) => {
        if (Array.isArray(allReviews.reviewsArr)) {
          setReviews(allReviews.reviewsArr);
          setLoading(false);
        } else {
          setSingleReview(allReviews.reviewObj);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [category]);

  return loading ? (
    <div className="loader">...Loading</div>
  ) : isNaN(Number(category)) ? (
    <main className="Main">
      <ul>
        {reviews.map((review) => {
          return (
            <li key={review.title}>
              <ReviewCard reviewObj={review} />
            </li>
          );
        })}
      </ul>
    </main>
  ) : (
    <SingleReviewTab review={singleReview} />
  );
};

export default Reviews;
