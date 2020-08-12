import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;
  const fetchData = await axios.get(
    `${API_URL}/posts?offset=${offset}&limit=5`
  );
  console.log("is there data?", fetchData);

  //  and define the variable `morePosts`

  const morePosts = fetchData.data.rows;

  dispatch(postsFetched(morePosts));
}
