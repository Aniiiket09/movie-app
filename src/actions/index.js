// {
//     type:'ADD_MOVIES',
//    movies:[m1,m2,m3,m4]
// }
// {
// type :'DECREASE_COUNT',
// }

//action types
export const ADD_MOVIES = "ADD_MOVIES";

//actions creator
export function addMovies(movies, id) {
  return {
    type: ADD_MOVIES,
    movies,
    id,
  };
}
