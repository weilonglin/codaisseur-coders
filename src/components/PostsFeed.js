// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {posts.map((row) => {
        return (
          <div>
            <Link to={`/post/${row.id}`}>
              <h3>{row.title}</h3>
            </Link>
            <p>
              {moment(row.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {row.tags.map((tag) => {
                return (
                  <React.Fragment key={tag.id}>
                    <span>{tag.tag}</span>
                  </React.Fragment>
                );
              })}
            </p>
          </div>
        );
      })}
      {loading ? (
        <em>Loading...</em>
      ) : (
        <button onClick={() => dispatch(fetchNext5Posts)}>Load more</button>
      )}
    </div>
  );
}
