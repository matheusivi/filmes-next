"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AdicionarFilme() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    year: "",
    genre: "",
    duration: "",
    poster: "",
    description: "",
    rating: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.title ||
      !form.year ||
      !form.genre ||
      !form.duration ||
      !form.poster ||
      !form.description ||
      !form.rating
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const res = await fetch("/api/filmes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          year: Number(form.year),
          genre: form.genre,
          duration: form.duration,
          poster: form.poster,
          description: form.description,
          rating: Number(form.rating),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        alert(data.error || "Erro ao cadastrar filme.");
        return;
      }

      alert("Filme cadastrado com sucesso!");
      setForm({
        title: "",
        year: "",
        genre: "",
        duration: "",
        poster: "",
        description: "",
        rating: "",
      });

      router.push("/");
    } catch {
      alert("Erro de conexão com a API.");
    }
  }

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cadastrar Novo Filme</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            name="title"
            value={form.title}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="year">Ano</Label>
          <Input
            id="year"
            name="year"
            type="number"
            value={form.year}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="genre">Gênero</Label>
          <Input
            id="genre"
            name="genre"
            value={form.genre}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="duration">Duração</Label>
          <Input
            id="duration"
            name="duration"
            value={form.duration}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="poster">Poster (URL)</Label>
          <Input
            id="poster"
            name="poster"
            type="url"
            value={form.poster}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            name="description"
            value={form.description}
            onChange={onChange}
            required
            rows={4}
          />
        </div>

        <div>
          <Label htmlFor="rating">Nota (0 a 10)</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min={0}
            max={10}
            step={0.1}
            value={form.rating}
            onChange={onChange}
            required
          />
        </div>

        <Button type="submit" className="mt-4">
          Adicionar Filme
        </Button>
      </form>
    </main>
  );
}
