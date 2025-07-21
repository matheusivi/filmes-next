"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  params: Promise<{ id: string }>;
};

export default function EditarFilme(props: Props) {
  const { id } = use(props.params);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    genre: "",
    duration: "",
    poster: "",
    description: "",
    rating: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(`/api/filmes/${id}`);
      const movie = await res.json();
      setFormData({
        title: movie.title || "",
        year: movie.year?.toString() || "",
        genre: movie.genre || "",
        duration: movie.duration || "",
        poster: movie.poster || "",
        description: movie.description || "",
        rating: movie.rating?.toString() || "",
      });
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/filmes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        year: parseInt(formData.year),
        rating: parseFloat(formData.rating),
      }),
    });
    router.push("/");
  };

  if (loading) return <p className="text-white text-center">Carregando...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">Editar Filme</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              name="title"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="year">Ano</Label>
            <Input
              name="year"
              type="number"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.year}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="genre">Gênero</Label>
            <Input
              name="genre"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.genre}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="duration">Duração</Label>
            <Input
              name="duration"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.duration}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="poster">URL do Poster</Label>
            <Input
              name="poster"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.poster}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              name="description"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="rating">Nota 0 a 5</Label>
            <Input
              name="rating"
              type="number"
              step="0.1"
              className="bg-gray-700 text-white border-none focus:ring-yellow-400"
              value={formData.rating}
              onChange={handleChange}
            />
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md"
            >
              Salvar Alterações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
