import { usePopularMovies } from "../hooks/usePopularMovies";

const Home = () => {
  const { movies, isLoading } = usePopularMovies();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-8">
      {/* Header Section */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Trending <span className="text-blue-500">Movies</span>
        </h1>
        <p className="mt-2 text-slate-400">
          Discover the most popular movies this week.
        </p>
      </header>

      {/* Grid Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="group relative flex flex-col overflow-hidden rounded-xl bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Image Wrapper */}
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Movie Info */}
            <div className="p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="line-clamp-1 font-semibold text-slate-100 group-hover:text-blue-400">
                  {movie.title}
                </h3>
                <span className="flex items-center rounded bg-slate-800 px-2 py-1 text-xs font-bold text-yellow-500">
                  ★ {movie.vote_average.toFixed(1)}
                </span>
              </div>

              <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                {movie.overview}
              </p>

              <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
