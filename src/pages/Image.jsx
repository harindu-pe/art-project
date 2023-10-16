import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetImage } from "../hooks/images";
import ImageCard from "../components/ImageCard";
import Loading from "../components/Loading";
import Comments from "../components/comments/Comments";
import { useNavigate } from "react-router";
import { HOME } from "../config/routes";

export default function Image() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { image, isLoading: imageLoading } = useGetImage(id);

  useEffect(() => {
    if (!image && !imageLoading) {
      navigate(HOME);
    }
  }, [image]);

  return (
    image && (
      <div className=" pt-5 flex flex-col lg:flex-row justify-center">
        <div className="px-10 w-full">
          {imageLoading ? <Loading /> : <ImageCard image={image} />}
        </div>
        <div className="px-10 mt-3 w-full lg:mt-10">
          {imageLoading ? <Loading /> : <Comments image={image} />}
        </div>
      </div>
    )
  );
}
