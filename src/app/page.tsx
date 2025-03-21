"use client";

import Carousel from "@/components/Carousel";
import MovieListByStatus from "@/components/MovieListByStatus";

export default function Home() {
  return (
    <div>
      <Carousel />
      <MovieListByStatus
        title="Now Playing"
        link_path="now_playing"
        path="/movie/now_playing?language=en-US&page=1"
      />
      <MovieListByStatus
        title="Upcoming"
        link_path="upcoming"
        path="/movie/upcoming?language=en-US&page=1"
      />
    </div>
  );
}
