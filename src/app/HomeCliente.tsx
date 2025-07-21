"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Filme } from "@/app/types/filme";

interface HomeClientProps {
  initialMovies: Filme[];
}

export default function HomeClient({ initialMovies }: HomeClientProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = initialMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este filme?")) {
      try {
        console.log("Excluindo filme com ID:", id);
        const response = await fetch(`/api/filmes/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          window.location.reload();
        } else {
          const errorData = await response.json();
          console.log("Erro ao excluir filme:", errorData);
          alert(
            `Erro ao excluir filme: ${errorData.error || "Erro desconhecido"}`
          );
        }
      } catch (error: unknown) {
        console.error("Erro ao excluir filme:", error);
        if (error instanceof Error) {
          alert(`Erro ao excluir filme: ${error.message}`);
        } else {
          alert("Erro ao excluir filme");
        }
      }
    }
  };

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold">CineNota</div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Procurar filmes..."
                className="bg-gray-800 text-white pl-10 w-64 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <Button variant="ghost" asChild>
              <Link href="/">Início</Link>
            </Button>

            <Button variant="outline" className="border-white" asChild>
              <Link href="/filmes/novo">Adicionar Filme</Link>
            </Button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-6 md:px-12 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMovies.length === 0 ? (
            <p className="text-white col-span-full text-center">
              Nenhum filme encontrado.
            </p>
          ) : (
            filteredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="w-full bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden"
              >
                <CardHeader className="p-0">
                  <Image
                    src={movie.poster || "/images/placeholder.jpg"}
                    alt={movie.title}
                    width={256}
                    height={384}
                    className="w-full h-80 object-contain rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold">
                    {movie.title}
                  </CardTitle>
                  <p className="text-sm text-gray-400">
                    {movie.year} • {movie.genre} • {movie.duration}
                  </p>
                  <p className="mt-2 text-sm">{movie.description}</p>
                  <div className="mt-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold">Avaliação:</span>
                      <span className="text-sm font-bold text-yellow-400">
                        {movie.rating}/5
                      </span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${
                              star <= Math.round(movie.rating)
                                ? "text-yellow-400"
                                : "text-gray-400"
                            } cursor-pointer`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.375 2.45a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.375-2.45a1 1 0 00-1.175 0l-3.375 2.45c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.635 9.397c-.784-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button asChild className="bg-blue-500 text-white">
                        <Link href={`/filmes/editar/${movie.id}`}>Editar</Link>
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
