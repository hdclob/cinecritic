import { useSearchParams } from "react-router";
import { useSearch } from "../hooks/useSearch";
import MediaPage from "../components/MediaPage";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  // We use "any" or a custom "SearchResult" type because 
  // this list contains both Movies and TV Shows.
  const { data, isLoading } = useSearch<any>(query);

  return (
    <MediaPage
      title=""
      subtitle={`Showing results for: ${query}`}
      items={data}
      isLoading={isLoading}
    />
  );
};

export default Search;