import { useMovies } from "@/hooks/useMovies";
import {
  CarouselContent,
  CarouselItem,
  Carousel as CarouselComponent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

type MovieType = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
};

const Carousel = () => {
  const { movies } = useMovies("/movie/now_playing?language=en-US&page=1");

  return (
    <CarouselComponent className="relative">
      <CarouselContent className="w-full overflow-hidden">
        {movies.map((movie: MovieType) => (
          <CarouselItem key={movie.id} className="w-screen h-full">
            <div className="w-full h-[calc(100vh-80px)]">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute w-1/3 top-1/2 -translate-y-1/2 left-1/12">
              <h2 className="text-white text-2xl font-bold">{movie.title}</h2>
              <p className="text-white text-sm line-clamp-3">
                {movie.overview}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-10 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-10 -translate-y-1/2" />
    </CarouselComponent>
  );
};

export default Carousel;
