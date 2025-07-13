import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";

const movies = [
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Star Wars",
    year: 2023,
    genre: "Action",
    duration: "3h 15m",
    poster:
      "https://th.bing.com/th/id/R.d9084abb1684ab72a5b246af0a3cdbb7?rik=kuB4LUX%2fezwVcg&pid=ImgRaw&r=0",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
  {
    title: "Homem de Ferro",
    year: 2023,
    genre: "Action",
    duration: "2h 15m",
    poster:
      "https://postergami.com/wp-content/uploads/2022/01/poster-wallpaper-homem-de-ferro-1.jpg",
    description: "Esta aventura começa...",
  },
];

export default function Home() {
  return (
    <div>
      <nav>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          MatheusFlix
        </h1>
      </nav>
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        {movies.map((movie, index) => (
          <Card
            key={index}
            className="w-full bg-gray-900 text-white rounded-lg shadow-lg"
          >
            <CardHeader className="p-0">
              <Image
                src={movie.poster}
                alt={`${movie.title}`}
                width={256}
                height={384}
                className="w-full h-96 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg font-bold">{movie.title}</CardTitle>
              <p className="text-sm text-gray-400">
                {movie.year} • {movie.genre} • {movie.duration}
              </p>
              <p className="mt-2 text-sm">{movie.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
