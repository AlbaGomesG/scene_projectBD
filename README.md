🎥 SCENE

O Scene é uma plataforma web que tem como público alvo as pessoas apaixonadas por filmes - um espaço para explorar, descobrir e se encantar com filmes de diversos gêneros.

Nosso objetivo é proporcionar uma experiência visual imersiva e organizada, onde o usuário possa navegar por uma galeria de filmes e visualizar seus detalhes de forma prática e intuitiva.

🎞️ SOBRE O PROJETO

O SCENE reúne em um só lugar tudo o que um amante dos filmes precisa:

🍿 Catálogo de Filmes: uma coleção visual com fotos e títulos dos filmes que estão no nosso banco de dados.
🎥 Detalhes dos Filmes: informações detalhadas como gênero, ano de lançamento e sinopse.
🔍 Exploração Rápida: interface simples e fluida para navegar entre os filmes.
✨ Design Moderno: foco na experiência do usuário com imagens otimizadas e layout limpo.

🛠️ TECNOLOGIAS UTILIZADAS

Frontend

- Next.js 15.5.2 - Framework React para desenvolvimento web moderno
- React 19.1.0 - Biblioteca para criação de interfaces de usuário
- React DOM 19.1.0 - Renderização de componentes React no navegador
- Lucide React 0.544.0 - Biblioteca de ícones modernos e personalizáveis
- Axios 1.11.0 - Cliente HTTP para integração com APIs

Backend

- Node.js - Ambiente de execução JavaScript no servidor
- Express 5.1.0 - Framework web para criação de APIs REST
- CORS 2.8.5 - Middleware para controle de acesso entre domínios
- Dotenv 17.2.2 - Gerenciamento de variáveis de ambiente
- Multer 2.0.2 - Middleware para upload de arquivos
- Nodemon 3.1.10 - Reinicialização automática durante desenvolvimento
- PostgreSQL (pg 8.16.3) - Banco de dados relacional


🌐 COMO EXECUTAR O PROJETO

Pré-requisitos

- Node.js(versão 16 ou superior)
- npm
- Git
- PostgresSQL instalado

1. Clonar os Repositórios

Backend:

https://github.com/AlbaGomesG/scene_projectBD.git
cd scene_projectBD

Frontend (em outro diretório): 

https://github.com/AlbaGomesG/scene_projectFront.git
cd scene_projectFront

2. PRIORIDADE - Configurar o Backend

Instalar as dependências no Backend:

cd scene_projectBD
npm install

Criar arquivo .env na raiz do projeto backend

PORT=4000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=scene
DB_PASSWORD="sua senha do banco"
DB_PORT="sua porta do banco"

3. PRIORIDADE - Configurar o Banco de Dados

- Abra o pgAdmin

- Crie o banco de dados:

Nome: scene
- Fazer backup/restore:

🔹Vá em pgAdmin
🔹Criar um banco chamado "scene"
🔹Botão direito: Query Tool
🔹Procure o arquivo "scene.sql"
🔹Aperte em play/run

4. Executar o projeto

Primeiro, inicie o Backend:

cd scene_projectBD
npm run dev

// O backend deverá ser executado na porta de 4000

Em seguida, configure o frontend:

cd scene_projectFront
npm install

// Vá para o repositório do Frontend e crie o arquivo .env!

Iniciar o Frontend

npm run dev

// O frontend deverá ser executado na porta 3000

5. Acessar a Aplicação

Abra seu navegador e acesse: http://localhost:3000

🗂️ Estrutura de pastas do projeto

Scene_Project/       
├── src/
│   ├── config/              
│   │   ├── database.js    
│   │   └── upload.js        
│   ├── controllers/        
│   │   └── movieController.js
│   ├── database/           
│   │   └── schema.sql       
│   ├── models/              
│   │   └── movieModel.js 
│   └── routes/              
│       └── movieRoutes.js 
├── .env                    
├── .gitignore              
├── package.json             
├── package-lock.json                  
├── README.md  
├── server.js              

👤 Autora

- Giovanna - https://github.com/AlbaGomesG