import React from "react";
import { useComments } from "../../hooks/comments";
import Comment from "./Comment";
import Loading from "../Loading";

export default function CommentList({ image }) {
  const { id } = image;
  const { comments, isLoading } = useComments(id);

  if (isLoading) return <Loading />;

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
