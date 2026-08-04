import { usePopular } from "../hooks/usePopular";
import type { Series } from "../types/tmdb";
import MediaPage from "../components/MediaPage";

const Shows = () => {
  const { data, isLoading } = usePopular<Series>("tv");

  return (
    <MediaPage
      title="Trending"
      subtitle="TV Shows"
      items={data}
      isLoading={isLoading}
    />
  );
};

export default Shows;
