import GifItem from "../components/GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

   // customhook
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h2>{category}</h2>
      {/* { isLoading && (<h2> Is loading ...</h2>)} */}
      { isLoading ? <h2> Is Loading...</h2> : null}

      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

