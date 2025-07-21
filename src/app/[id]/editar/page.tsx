"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getParams } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>; // novo formato: params é uma Promise
};

export default function EditarFilme(props: Props) {
  const { id } = use(props.params); // uso de React.use()
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

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Editar Filme</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input name="title" value={formData.title} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="year">Ano</Label>
          <Input
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="genre">Gênero</Label>
          <Input name="genre" value={formData.genre} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="duration">Duração</Label>
          <Input
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="poster">URL do Poster</Label>
          <Input
            name="poster"
            value={formData.poster}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="rating">Nota</Label>
          <Input
            name="rating"
            type="number"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Salvar Alterações</Button>
      </form>
    </div>
  );
}
