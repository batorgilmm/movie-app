import { useGenres } from "@/hooks/useGenres";
import Link from "next/link";
import { Badge } from "./ui/badge";

type GenreType = {
  id: number;
  name: string;
};

export const GenreList = () => {
  const { genres, loading, error } = useGenres();
  return (
    <div className="space-y-2 space-x-2">
      {!loading &&
        genres.map((genre: GenreType) => (
          <Link href={`/genre/${genre.id}`} key={genre.id}>
            <Badge key={genre.id} variant="outline">
              {genre.name}
            </Badge>
          </Link>
        ))}
    </div>
  );
};

