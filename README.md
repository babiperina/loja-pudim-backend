# Backend para Gerenciamento de Estoque de Pudins

Este é o backend para uma aplicação de gerenciamento de estoque de uma loja que vende pudim. O backend é construído com Node.js e Express, e usa SQLite como banco de dados.

## Funcionalidades

- **Autenticação de Usuário**: Registre, faça login e obtenha um token JWT.
- **Gerenciamento de Produtos**: Crie, liste, atualize e remova produtos.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [SQLite](https://www.sqlite.org/index.html)

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd nome-do-repositorio
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Crie um arquivo `.env` na raiz do projeto e adicione a chave secreta:**

    ```env
    ACCESS_TOKEN_SECRET=your_super_secret_key
    ```

4. **Crie o banco de dados e as tabelas necessárias (se ainda não estiverem criadas).**

## Scripts

- **Iniciar o Servidor:**

    ```bash
    npm start
    ```

- **Testar o Servidor:**

    Para rodar testes, use:

    ```bash
    npm test
    ```

## Endpoints da API

### **Autenticação**

- **POST /api/register**

    Registra um novo usuário.

    **Body:**
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```

- **POST /api/login**

    Faz login e retorna um token JWT.

    **Body:**
    ```json
    {
        "username": "string",
        "password": "string"
    }
    ```

### **Produtos**

- **GET /api/produtos**

    Lista todos os produtos. Requer autenticação.

- **GET /api/produtos/:id**

    Recupera detalhes de um produto específico. Requer autenticação.

- **POST /api/produtos**

    Cria um novo produto. Requer autenticação.

    **Body:**
    ```json
    {
        "nome": "string",
        "descricao": "string (opcional)",
        "preco": "number",
        "quantidade_em_estoque": "number"
    }
    ```

- **PUT /api/produtos/:id**

    Atualiza informações de um produto. Requer autenticação.

    **Body:**
    ```json
    {
        "nome": "string",
        "descricao": "string (opcional)",
        "preco": "number",
        "quantidade_em_estoque": "number"
    }
    ```

- **DELETE /api/produtos/:id**

    Remove um produto do estoque. Requer autenticação.

## Ambiente de Desenvolvimento

Certifique-se de que as variáveis de ambiente estão configuradas corretamente no arquivo `.env`.

## Problemas Comuns

- **403 Forbidden**: Verifique se o token JWT está correto e se não expirou. Garanta que o token está sendo enviado no cabeçalho `Authorization` como `Bearer <token>`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções! Abra um pull request ou crie uma issue para sugestões e problemas.

---

**Nota:** Este é um exemplo básico e pode precisar de ajustes de acordo com as especificidades do seu projeto.
