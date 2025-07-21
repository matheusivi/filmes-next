# 🎬 Sistema de Gerenciamento de Filmes

Este projeto é um sistema de gerenciamento de filmes desenvolvido com **Next.js 14**, utilizando **Prisma ORM** para manipulação do banco de dados **MongoDB**. Nele é possível **cadastrar**, **listar**, **editar** e **excluir** filmes.

---
## 🚀 Tecnologias Utilizadas

- [Next.js 14](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Shadcn UI](https://ui.shadcn.dev/) (componentes estilizados)

---
## 🧠 Funcionalidades
- ✅ Cadastro de filmes com título, ano, gênero, duração, poster, descrição e nota.
- ✅ Listagem de todos os filmes em cards visuais.
- ✅ Edição de filmes já cadastrados.
- ✅ Remoção de filmes com um clique.
- ✅ Interface limpa e responsiva utilizando Tailwind CSS + Shadcn UI.

---
## 💾 Requisitos para rodar o projeto
- Node.js (versão 18 ou superior)
- MongoDB (você pode usar o [MongoDB Atlas](https://www.mongodb.com/atlas/database) ou local)
- Conta no MongoDB com um banco de dados, com uma Coleção chamado "Movie"

---
## ⚙️ Como rodar localmente

1. **Clone o repositório:**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

npm install

DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/NomeDoBanco?retryWrites=true&w=majority"

Depois irá : npx prisma db push, e por fim: npx prisma db push. Acesse http://localhost:3000 no navegador para ver o sistema funcionando.


As estruturas de Pastas estão:
├── prisma/              # Schema e config do Prisma ORM
├── src/
│   ├── app/             # Rotas do Next.js
│   │   ├── page.tsx     # Página principal (listar filmes)
│   │   ├── novo/        # Página de cadastro
│   │   ├── [id]/editar/ # Página de edição
│   │   └── api/filmes/  # Rotas da API REST (GET, POST, PUT, DELETE)
│   └── components/ui/   # Componentes do Shadcn UI (botões, inputs, etc)
├── tailwind.config.ts   # Configuração do Tailwind
├── .env                 # Variáveis de ambiente (ocultas no Git)
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo

