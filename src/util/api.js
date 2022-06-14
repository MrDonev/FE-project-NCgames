import axios from 'axios';

export const baseUrl = axios.create({
  baseURL: 'https://donev-nc-games.herokuapp.com/api',
});

export const getAllReviews = (category) => {
  return category === undefined || isNaN(Number(category))
    ? baseUrl
        .get('/reviews', {
          params: {
            category,
          },
        })
        .then((res) => {
          return res.data;
        })
    : baseUrl.get(`/reviews/${category}`).then((res) => {
        return res.data;
      });
};

export const getAllCategories = () => {
  return baseUrl.get('/categories').then((res) => {
    return res.data;
  });
};

export const patchVote = (value, id) => {
  return baseUrl.patch(`/reviews/${id}`, { inc_votes: value }).then((res) => {
    return res.data;
  });
};

export const getComments = (id) => {
  return baseUrl.get(`/reviews/${id}/comments`).then((res) => {
    return res.data;
  });
};

export const patchCommentVotes = (value, id) => {
  return baseUrl.patch(`/comments/${id}`, { inc_votes: value }).then((res) => {
    return res.data;
  });
};
