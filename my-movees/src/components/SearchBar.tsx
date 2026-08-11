import { useNavigate } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (formData: FormData) => {
    const query = formData.get("searchMedia") as string; // "searchMedia" is the 'name' of the input
    if (query?.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      action={handleSearch}
      className="hidden sm:block flex-1 max-w-xs mx-4"
    >
      <div className="hidden sm:block flex-1 max-w-xs mx-4">
        <div className="relative">
          <input
            type="text"
            name="searchMedia"
            placeholder="Search movies and tv shows..."
            className="w-full bg-slate-800 border-none text-sm rounded-full py-2 px-4 focus:ring-2 focus:ring-red-600 outline-none transition"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
