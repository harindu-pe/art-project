import React from "react";
import NewComment from "./NewComment";
import Loading from "../Loading";
import CommentList from "./CommentList";

export default function Comments({ image }) {
  return (
    <section>
      <NewComment image={image} />
      <CommentList image={image} />
    </section>
  );
}
