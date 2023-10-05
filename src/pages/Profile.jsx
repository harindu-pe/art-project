import React from "react";
import { useParams } from "react-router-dom";
import { useGetUserImages } from "../hooks/users";
import { useAuth } from "../hooks/auth";
import { useGetUser } from "../hooks/users";
import ImageCard from "../components/ImageCard";
import Masonry from "react-masonry-css";
import Loading from "../components/Loading";

export default function Profile() {
  const { id } = useParams();
  const { images, isLoading: imagesLoading } = useGetUserImages(id);
  const { user: authUser, isLoading: authLoading, error } = useAuth();
  const { user, isLoading: userLoading } = useGetUser(id);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  if (userLoading || authLoading) return <Loading />;

  return (
    <div className="p-5">
      <h1 className=" mb-9 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Artwork by{" "}
        <span className="text-red-500">
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
        </span>
      </h1>
      {imagesLoading ? (
        <Loading />
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images?.length === 0 ? (
            <div>No posts yet... Feeling a little lonely here.</div>
          ) : (
            images?.map((image) => (
              <ImageCard key={image.imageLink} image={image} />
            ))
          )}
        </Masonry>
      )}
    </div>
  );
}
