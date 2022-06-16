import { getAllReviews } from '../util/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import SingleReviewTab from './SingleReview';
import SortReviews from './SortReviews';

const Reviews = () => {
  const { category } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState();
  const [orderBy, setOrderBy] = useState();

  useEffect(() => {
    getAllReviews(category, sortBy, orderBy)
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
  }, [category, orderBy, sortBy]);

  return loading ? (
    <div className="loader">...Loading</div>
  ) : isNaN(Number(category)) ? (
    <main className="Main">
      <SortReviews
        setSortBy={[sortBy, setSortBy]}
        setOrderBy={[orderBy, setOrderBy]}
      />
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
