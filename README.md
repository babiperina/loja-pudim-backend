# Loja de Pudim - Backend

## Descrição

Este é o backend da aplicação de gerenciamento de estoque para uma loja que vende pudim. A API é construída com Node.js e Express, e utiliza SQLite como banco de dados.

## Tecnologias

- Node.js
- Express
- SQLite
- bcryptjs
- jsonwebtoken

## Instalação

1. Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd <PASTA_DO_BACKEND>
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados:
    ```bash
    node setup.js
    ```

4. Inicie o servidor:
    ```bash
    npm start
    ```

## Endpoints

### Autenticação

- **POST /api/register**: Cria um novo usuário.
  - Body:
    ```json
    {
      "nome": "Nome do Usuário",
      "email": "email@example.com",
      "senha": "senha123"
    }
    ```
  - Response:
    ```json
    {
      "message": "Usuário criado com sucesso",
      "id": 1
    }
    ```

- **POST /api/login**: Autentica um usuário e retorna um token.
  - Body:
    ```json
    {
      "email": "email@example.com",
      "senha": "senha123"
    }
    ```
  - Response:
    ```json
    {
      "message": "Autenticado com sucesso",
      "token": "JWT_TOKEN"
    }
    ```

### Produtos

- **GET /api/produtos**: Lista todos os produtos.
- **GET /api/produtos/:id**: Recupera detalhes de um produto específico.
- **POST /api/produtos**: Cria um novo produto.
- **PUT /api/produtos/:id**: Atualiza informações de um produto.
- **DELETE /api/produtos/:id**: Remove um produto do estoque.

## Configuração

- **SECRET_KEY**: No arquivo `authController.js`, substitua `'seu-segredo-aqui'` por uma chave secreta real.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
