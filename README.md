# JSONPlaceholder Cypress Smoke Tests 🚀

Projeto de testes automatizados com **Cypress**, utilizando a **API JSONPlaceholder** (https://jsonplaceholder.typicode.com/) como alvo, com foco em **Smoke Tests** para validação rápida e contínua dos principais endpoints.

📌 **Pré-requisitos**

- Git
- Node.js (v20.18.0) e npm (v10.8.2)
- Visual Studio Code (v1.95.0) ou superior
- Microsoft Edge ou outro navegador compatível

_Recomenda-se Node.js v18.15.0 e npm 9.5.0 ou superiores._

🚀 **Instalação**

1. Clone o repositório:

```
git clone https://github.com/mvqe/jsonplaceholder-cypress-smoke-tests.git
```

2. Acesse a pasta do projeto:

```
cd jsonplaceholder-cypress-smoke-tests
```

3. Instale as dependências:

```
npm install
```

✅ **Testes Smoke Automatizados**

- **GET /posts** → Verifica se o endpoint retorna status `200 OK` e uma lista de posts.
- **GET /posts/{id}** → Verifica se o endpoint retorna status `200 OK` e um post específico.
- **GET /comments** → Verifica se o endpoint retorna status `200 OK` e uma lista de comentários.
- **GET /users** → Verifica se o endpoint retorna status `200 OK` e uma lista de usuários.
- **GET /users/{id}** → Verifica se o endpoint retorna status `200 OK` e um usuário específico.

Esses testes garantem que os principais serviços da API estão funcionando e disponíveis para consumo.

▶️ **Como executar os testes**

- Para rodar os testes no modo headless (linha de comando):

```
npx cypress run
```

- Para rodar no modo interativo (com interface gráfica):

```
npx cypress open
```

Selecione o arquivo de testes desejado dentro da interface para executá-lo.

📄 **Estrutura do Projeto**

```
📁 cypress
 └── 📁 e2e
      └── JSONplaceholder-cypress-tests.cy.js
📄 cypress.config.js
📄 package.json
```

📌 **Observações**

- Este projeto é **exclusivamente para fins educacionais e prática** com automação de testes de APIs usando Cypress.
- A API **JSONPlaceholder** é pública, gratuita e não exige autenticação.

💙 Feito com dedicação por [@mvqe](https://github.com/mvqe)
