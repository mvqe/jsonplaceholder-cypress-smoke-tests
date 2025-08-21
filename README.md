# JSONPlaceholder Cypress Smoke Tests 🚀

Automação de testes end-to-end com **Cypress**, focada em **Smoke Tests** para a [API JSONPlaceholder](https://jsonplaceholder.typicode.com/). Este projeto visa validar rapidamente os principais endpoints da API, garantindo disponibilidade e funcionamento básico.

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Executar os Testes](#como-executar-os-testes)
- [Testes Automatizados](#testes-automatizados)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre o Projeto

Este repositório demonstra automação de testes E2E utilizando Cypress para validar os principais endpoints da API JSONPlaceholder. O objetivo é garantir que os serviços essenciais estejam disponíveis para consumo, promovendo boas práticas de qualidade de software.

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (>=18.x recomendado)
- [npm](https://www.npmjs.com/) (>=9.x recomendado)
- [Visual Studio Code](https://code.visualstudio.com/) (>=1.95.0)
- [Microsoft Edge](https://www.microsoft.com/edge) ou outro navegador compatível

## Instalação

Clone o repositório e instale as dependências:

```sh
git clone https://github.com/mvqe/jsonplaceholder-cypress-smoke-tests.git
cd jsonplaceholder-cypress-smoke-tests
npm install
```

## Como Executar os Testes

- **Modo headless (terminal):**
  ```sh
  npx cypress run
  ```
- **Modo interativo (GUI):**
  ```sh
  npx cypress open
  ```
  Selecione o arquivo de teste desejado na interface.

## Testes Automatizados

## Testes Automatizados

- **GET /posts**: Lista todos os posts.
- **GET /posts/{id}**: Retorna um post específico.
- **GET /posts/{id}/comments**: Retorna os comentários de um post específico.
- **GET /comments**: Lista todos os comentários.
- **GET /comments/{id}**: Retorna um comentário específico.
- **GET /albums**: Lista todos os álbuns.
- **GET /albums/{id}**: Retorna um álbum específico.
- **GET /albums/{id}/photos**: Retorna as fotos de um álbum específico.
- **GET /photos**: Lista todas as fotos.
- **GET /photos/{id}**: Retorna uma foto específica.
- **GET /todos**: Lista todas as tarefas.
- **GET /todos/{id}**: Retorna uma tarefa específica.
- **GET /users**: Lista todos os usuários.
- **GET /users/{id}**: Retorna um usuário específico.
- **GET /users/{id}/posts**: Retorna os posts de um usuário específico.
- **GET /users/{id}/todos**: Retorna as tarefas de um usuário específico.
- **GET /users/{id}/albums**: Retorna os álbuns de um usuário específico.
- **POST /posts**: Cria um novo post (mock).
- **DELETE /posts/{id}**: Deleta um post (mock).

Esses testes garantem que os principais serviços da API estão funcionando e disponíveis.

## Estrutura do Projeto

```
cypress/
  e2e/
    JSONplaceholder-cypress-tests.cy.js
cypress.config.js
package.json
```

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'feat: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob licença [MIT](LICENSE).

---

> Projeto exclusivamente para fins educacionais e prática com automação de testes de APIs usando Cypress.

Feito com 💙 por [@mvqe](https://github.com/mvqe)
