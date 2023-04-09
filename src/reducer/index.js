export default function movies(state = [], actions) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
