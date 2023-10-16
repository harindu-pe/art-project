import { useGetUserImages } from "../hooks/users";
import ImageCard from "../components/ImageCard";
import Masonry from "react-masonry-css";
import Loading from "../components/Loading";

export default function Home() {
  const { images, isLoading } = useGetUserImages();

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="p-5 md:p-10 flex items-center justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images?.length === 0 ? (
            <div className="">
              No posts yet... Feeling a little lonely here.
            </div>
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
