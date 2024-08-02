# Running

- Inicialize as instâncias localmente com Docker:
  `docker compose up -d`

- Crie um arquivo `.env` com base no `env.example` e preencha todos os campos
  - Em `DATABASE_URL` utilize a seguinte url, caso não tenha modificado o serviço no yml do docker compose: `postgresql://postgres:postgresdocker@localhost:5432/db_board_jira`
  - `PORT`aceita algum `number`, não esqueça de definir alguma porta para a aplicação utilizar.
  - `NODE_ENV` aceita um `string`, dentre [`'development'`, `'prod'`] 

- Instale as dependências: `npm i`

- Prepare o banco de dados com as migrations: `npx prisma migrate deploy`

- Se tudo correu bem, voc6e pode inicializar o prisma studio com `npx prisma studio` e verificar se o banco já está montado corretamente (ele pode ser acessado em `http://localhost:5555`). Se preferir voce pode utilizar um SGDB, como o DBeaver também e inserir as suas credenciais. 