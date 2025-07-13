"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react"
import Image from "next/image";

const movies = [
  {
    title: "Homem de Ferro",
    year: 2008,
    genre: "Ação",
    duration: "2h 6min",
    poster:
      "https://img.elo7.com.br/product/zoom/267720C/big-poster-filme-homem-de-ferro-3-lo03-tamanho-90x60-cm-homem-de-ferro-3.jpg",
    description:
      "Tony Stark, um bilionário gênio da tecnologia, é capturado por terroristas e cria uma armadura poderosa para escapar. De volta aos EUA, decide usar sua invenção para combater o mal como o Homem de Ferro.",
    rating: 4.5,
  },
  {
    title: "Star Wars: Uma Nova Esperança",
    year: 1977,
    genre: "Ficção Científica",
    duration: "2h 1min",
    poster:
      "https://th.bing.com/th/id/R.d9084abb1684ab72a5b246af0a3cdbb7?rik=kuB4LUX%2fezwVcg&pid=ImgRaw&r=0",
    description:
      "Luke Skywalker embarca em uma jornada épica ao lado de aliados inesperados para enfrentar o Império Galáctico e salvar a galáxia da tirania de Darth Vader.",
    rating: 4.8,
  },
  {
    title: "Os Vingadores",
    year: 2012,
    genre: "Ação",
    duration: "2h 23min",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YH6v1OYaYr4oH_WwpYd-bSUpESLwl2Mo2w&s",
    description:
      "Heróis como Homem de Ferro, Capitão América, Thor e Hulk se unem para formar os Vingadores e enfrentar a ameaça de Loki, que planeja dominar a Terra com um exército alienígena.",
    rating: 4.3,
  },
  {
    title: "Indiana Jones e os Caçadores da Arca Perdida",
    year: 1981,
    genre: "Aventura",
    duration: "1h 55min",
    poster:
      "https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc4/Indiana-Jones-and-the-Great-Circle-has-receieved-another-update.jpg",
    description:
      "O arqueólogo Indiana Jones embarca em uma perigosa missão para encontrar a lendária Arca da Aliança antes que ela caia nas mãos dos nazistas.",
    rating: 4.7,
  },
  {
    title: "Ace Ventura: Um Detetive Diferente",
    year: 1994,
    genre: "Comédia",
    duration: "1h 26min",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/8/84/Ace_ventura_pet_detective.jpg",
    description:
      "Ace Ventura é um excêntrico detetive especializado em encontrar animais desaparecidos. Quando a mascote de um time de futebol americano é sequestrada, ele entra em ação com seu estilo caótico.",
    rating: 3.9,
  },
  {
    title: "Pantera Negra",
    year: 2018,
    genre: "Ação",
    duration: "2h 14min",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/unnamed_13_75a3ebb1.jpeg?region=0%2C0%2C356%2C512",
    description:
      "Após a morte de seu pai, T’Challa retorna a Wakanda para assumir o trono como Pantera Negra, mas enfrenta inimigos que desafiam seu direito de governar e ameaçam o destino de seu povo.",
    rating: 4.6,
  },
  {
    title: "Star Trek",
    year: 2009,
    genre: "Ficção Científica",
    duration: "2h 7min",
    poster:
      "https://m.media-amazon.com/images/I/81hCWYkLTqL._UF894,1000_QL80_.jpg",
    description:
      "A bordo da nave Enterprise, um novo grupo de cadetes liderado por James T. Kirk enfrenta uma ameaça vinda do futuro que pode destruir planetas inteiros.",
    rating: 4.2,
  },
  {
    title: "Godzilla",
    year: 2014,
    genre: "Ação",
    duration: "2h 3min",
    poster:
      "https://upload.wikimedia.org/wikipedia/pt/f/f9/Godzilla2014Poster.jpg",
    description:
      "Após o surgimento de criaturas monstruosas conhecidas como MUTO, o lendário Godzilla ressurge para restaurar o equilíbrio da natureza e enfrentar a ameaça global.",
    rating: 3.8,
  },
  {
    title: "Alien vs. Predador",
    year: 2004,
    genre: "Terror / Ficção Científica",
    duration: "1h 41min",
    poster:
      "https://www.papodecinema.com.br/wp-content/uploads/2017/05/20170512-alien-vs-predador-papo-de-cinema-cartaz.webp",
    description:
      "Durante uma expedição na Antártida, uma equipe de exploradores descobre uma antiga pirâmide que abriga o confronto entre duas raças alienígenas mortais: os Aliens e os Predadores.",
    rating: 3.5,
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState(""); 

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="text-2xl font-bold">CineNota </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Procurar filmes..."
                className="bg-gray-800 text-white pl-10 w-64 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              />
            </div>
            <Button variant="ghost">Início</Button>
            <Button variant="ghost">Filmes</Button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-6 md:px-12 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMovies.map((movie, index) => (
            <Card
              key={index}
              className="w-full bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden"
            >
              <CardHeader className="p-0">
                <Image
                  src={movie.poster}
                  alt={`${movie.title}`}
                  width={256}
                  height={384}
                  className="w-full h-80 object-contain rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-bold">{movie.title}</CardTitle>
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
                  <div className="mt-2">
                    <textarea
                      className="w-full bg-gray-800 text-white rounded-md p-2 text-sm resize-none"
                      rows={3}
                      placeholder="Escreva seu comentário..."
                    ></textarea>
                    <Button
                      variant="outline"
                      className="mt-2 bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
                    >
                      Enviar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}