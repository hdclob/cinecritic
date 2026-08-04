import { usePopular } from "../hooks/usePopular";
import type { Movie } from "../types/tmdb";
import MediaPage from "../components/MediaPage";

const Movies = () => {
  const { data, isLoading } = usePopular<Movie>("movie");

  return (
    <MediaPage
      title="Trending"
      subtitle="Movies"
      items={data}
      isLoading={isLoading}
    />
  );
};

export default Movies;
