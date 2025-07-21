import HomeClient from "./HomeCliente";
import { Filme } from "@/types/filme";

async function getFilmes(): Promise<Filme[]> {
  try {
    const res = await fetch("http://localhost:3000/api/filmes", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Frro ao buscar filmes");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const movies = await getFilmes();
  return <HomeClient initialMovies={movies} />;
}
