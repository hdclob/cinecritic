import type { MediaContent } from "../types/tmdb";

interface MediaPageProps {
  title: string;
  subtitle: string;
  items: MediaContent[];
  isLoading: boolean;
}

const MediaPage = ({ title, subtitle, items, isLoading }: MediaPageProps) => {
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        ...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          {title} <span className="text-blue-500">{subtitle}</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item) => {
          // Logic to handle title vs name
          const displayTitle = "title" in item ? item.title : item.name;

          return (
            <div
              key={item.id}
              className="group relative bg-slate-900 rounded-xl overflow-hidden"
            >
              {/* Image Wrapper */}
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={displayTitle}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="line-clamp-1 font-semibold min-w-0">{displayTitle}</h3>
                  <span className="flex shrink-0 items-center whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs font-bold text-yellow-500">
                    ★ {item.vote_average.toFixed(1)}
                  </span>
                </div>

                <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                  {item.overview}
                </p>

                <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaPage;
