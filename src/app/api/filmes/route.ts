// app/api/filmes/route.ts
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/filmes
export async function GET(): Promise<NextResponse> {
  try {
    const filmes = await prisma.movie.findMany();
    return NextResponse.json(filmes);
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.json(
      { error: "Erro ao buscar filmes" },
      { status: 500 }
    );
  }
}

// POST /api/filmes
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();

    const newMovie = await prisma.movie.create({
      data: {
        title: data.title,
        year: data.year,
        genre: data.genre,
        duration: data.duration,
        poster: data.poster,
        description: data.description,
        rating: data.rating,
      },
    });

    return NextResponse.json(newMovie, { status: 201 });
  } catch (error) {
    console.error("Error creating movie:", error);
    return NextResponse.json({ error: "Erro ao criar filme" }, { status: 500 });
  }
}
