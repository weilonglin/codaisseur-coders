import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post details</h1>
      <a>param: {id}</a>
    </div>
  );
}
