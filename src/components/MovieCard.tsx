import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movies/${movie.id}`} className="block">
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={
            `https://image.tmdb.org/t/p/original/${movie.poster_path}` ||
            "/placeholder.svg"
          }
          alt={movie.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <div className="flex items-center mb-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-sm font-medium">{movie.rating}</span>
          <span className="text-sm text-muted-foreground">/10</span>
        </div>
        <h3 className="font-medium text-sm line-clamp-2">{movie.title}</h3>
      </div>
    </Link>
  );
};
