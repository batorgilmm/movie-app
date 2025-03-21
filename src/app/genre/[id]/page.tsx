"use client";
import { GenreList } from "@/components/GenreList";
import { MovieCard } from "@/components/MovieCard";
import { Separator } from "@/components/ui/separator";
import { useMovies } from "@/hooks/useMovies";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();

  const { movies, loading, error } = useMovies(
    `/discover/movie?language=en&with_genres=${params.id}&page=1`
  );
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="flex gap-4">
        <GenreList />
        <Separator orientation="vertical" className="h-full" />
      </div>
      <div className="col-span-2 grid grid-cols-4 gap-12">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Page;
