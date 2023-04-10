// {
//     type:'ADD_MOVIES',
//    movies:[m1,m2,m3,m4]
// }
// {
// type :'DECREASE_COUNT',
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";

export const SHOW_SET_FAVOURITES = "SHOW_SET_FAVOURITES";
//actions creator
export function addMovies(movies, id) {
  return {
    type: ADD_MOVIES,
    movies,
    id,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}
export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}
export function setShowFavourites(val) {
  return {
    type: SHOW_SET_FAVOURITES,
    val,
  };
}
