import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useMovies } from "@/hooks/useMovies";
import { MovieCard } from "./MovieCard";

const MovieListByStatus = ({ title, path, link_path }) => {
  const { movies } = useMovies(path);
  const router = useRouter();

  const onClick = () => {
    router.push(`/status/${link_path}`);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h6>{title}</h6>
        <Button onClick={onClick} variant="outline">
          See more
        </Button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {movies.slice(0, 10).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListByStatus;
