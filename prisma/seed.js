import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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

async function main() {
  await prisma.movie.deleteMany(); 
  await prisma.movie.createMany({
    data: movies,
  });
  console.log('Movies seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });