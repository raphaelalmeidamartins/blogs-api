# :computer: Blogs API :writing_hand:

![cover](./cover.png)

## :page_with_curl: About/Sobre

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />

Node.js and Express.js project developed by [Raphael Martins](https://www.linkedin.com/in/raphaelameidamartins/) at the end of Unit 24 ([Back-end Development Module](https://github.com/raphaelalmeidamartins/trybe_exercicios/tree/main/3_Desenvolvimento-Back-end)) of Trybe's Web Development course. I was approved with 100% of the mandatory and optional requirements met.

We had to create a blog RESTful API using MSC (Model-Service-Controller) architecture. We must use the Sequelize.js ORM to connect with the database, and handle authentication with Json Web Token.
<br />
</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />

Projeto Node.js, Express.js e Sequelize.js desenvolvido por [Raphael Martins](https://www.linkedin.com/in/raphaelameidamartins/) ao final do Bloco 24 ([Módulo Desenvolvimento Back-end](https://github.com/raphaelalmeidamartins/trybe_exercicios/tree/main/3_Desenvolvimento-Back-end)) do curso de Desenvolvimento Web da Trybe. Fui aprovado com 100% dos requisitos obrigatórios e opcionais atingidos.

Tivemos que criar uma API RESTful de blog usando a arquitetura MSC (Model-Service-Controller). A conexão com o banco de dados precisou ser feita com o ORM Sequelize e a autenticação com Json Web Token.
<br />
</details>

## :man_technologist: Developed Skills/Habilidades Desenvolvidas

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />

* Create an Express.js application
* Create a RESTful API using MSC (Model-Service-Controller) architecture
* Validate requests' data with the Joi library
* Implement authentication with Json Web Token (JWT)
* Use the Sequelize.js ORM to connect with the database and perform queries
<br />
</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />

* Criar uma aplicação Express.js
* Criar uma API RESTful usando arquitetura MSC (Model-Service-Controller)
* Validar dados das requisições com a biblioteca Joi
* Implementar autenticação por Json Web Token (JWT)
* Usar o ORM Sequelize.js para fazer a conexão e queries no banco de dados
<br />
</details>

## :hammer_and_wrench: Tools/Ferramentas

* Node.js
* Express.js
* Sequelize.js
* Express Rescue
* Json Web Tokens
* DotEnv
* Joi
* Docker
* MySQL

## :hammer_and_wrench: Installation and execution/Instalação e execução

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />

To run this application you need to have **Git**, **Docker** and **Docker Compose** installed on your machine. Docker Compose needs to be at **1.29** version or superior.

### 1 - Clone the repository
```sh
git clone https://github.com/raphaelalmeidamartins/blogs-api
```

### 2 - Run the containers by running the command below in the application folder
```sh
docker-compose up -d --build
```

### 3 - Run this command to attach the container to your terminal
```sh
docker exec -it blogs_api bash
```

### 4 - On the attached container, install the dependencies and run the application

Install the dependencies:
```sh
npm install
```

Run the application:
```sh
npm start
```

### 5 - Access the documentation and make requests to the server running on the port 3000

Access the route http://localhost:3000/docs/en to see the English documentation, and use a HTTP requests client of your choice (Insomnia, Thunder Client, etc) to make requests.

<br />
</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />

Para rodar está aplicação é necessário ter **Git**, **Docker** e o **Docker Compose** instalados no seu computador. O Docker Compose precisa estar na versão **1.29** ou superior.

### 1 - Clone o repositório
```sh
git clone git@github.com:raphaelalmeidamartins/blogs-api.git
```

### 2 - Rode os containers executando o comando abaixo na pasta raiz da aplicação
```sh
docker-compose up -d --build
```

### 3 - Rode o comando para abrir o terminal do container store_manager
```sh
docker exec -it blogs_api bash
```

### 4 - No terminal do container, installe as dependências e execute a aplicação

Instalando dependências:
```sh
npm install
```

Executando aplicação:
```sh
npm start
```

### 5 - Acesse a documentação e faça requisições para o servidor aberto na porta 3000

Acesse a rota http://localhost:3000/docs/br para acessar a documentação em português e utilize um cliente de requisições HTTP de sua preferência (Insomnia, Thunder Client, etc) para fazer as requisições.

<br />
</details>

## :books: Documentation/Documentação

<details>
  <summary markdown="span"><strong>:us: English</strong></summary><br />

With the application running, acess the http://localhost:3000/docs/en route on your browser to see the English documentation.
<br />
</details>

<details>
  <summary markdown="span"><strong>:brazil: Português</strong></summary><br />

Com a aplicação em execução, acesse a rota http://localhost:3000/docs/br no navegador para ver a documentação em português.
<br />
</details>

## :trophy: Grade/Nota

![My grade of the project - Minha nota no projeto](./nota.png)
