import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

// GET /api/movie/[id]
export async function GET(
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> {
  try {
    const { id } = params;
    const movie = await prisma.movie.findUnique({ where: { id } });

    if (!movie) {
      return NextResponse.json(
        { error: "Filme não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar filme" },
      { status: 500 }
    );
  }
}

// PUT /api/movie/[id]
export async function PUT(
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> {
  try {
    const { id } = params;
    const data = await req.json();

    const updated = await prisma.movie.update({
      where: { id },
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

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao atualizar filme" },
      { status: 500 }
    );
  }
}

// DELETE /api/movie/[id]
export async function DELETE(
  req: NextRequest,
  { params }: Params
): Promise<NextResponse> {
  try {
    const { id } = params;
    await prisma.movie.delete({ where: { id } });

    return NextResponse.json({ message: "Filme excluído com sucesso" });
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao excluir filme" },
      { status: 500 }
    );
  }
}
