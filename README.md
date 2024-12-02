# Testes Automatizados em Node.js
Neste projeto estão sendo automatizados os testes para login e envio de mensagens de texto, audio e imagens na plataforma de chat da JetSales, utilizando as bibliotecas Jest e Supertest.

## Tópicos
- [Configuração](#configuração)
- [Uso](#uso)
- [Descrição dos testes](#descrição)

## Configuração

1. Clone o repositório em seu dispositivo usando

```bash
git clone https://github.com/r0usis/Testes-Automatizados
```
   
2. Inicie o projeto Node

```bash
npm init -y
```

3. Instale as bibliotecas utilizando o comando npm

```bash
npm install jest supertest
npm install dotenv
```

4. Crie um arquivo .env e nele defina as variaveis de ambiente ```DB_USER``` para o email correspondente e ```DB_PASS``` para a senha correspondente. Segue um exemplo de como o arquivo deve ser escrito:

```bash
DB_USER="email@gmail.com"
DB_PASS="minhasenha123"
```

## Uso

1. Para executar os testes, basta executar o seguinte comando usando npm

```bash
npm test
```

## Descrição

Este projeto realiza 6 testes, onde 2 testes são de login e 4 são de envio de mensagens.

1. Login

- Verifica se o login realizado com credenciais válidas (que são as variaveis de ambiente definidas no arquivo .env) retorna o status 200 de sucesso;
- Verifica se o login com credenciais inválidas retorna o status 401 de 

2. Envio de mensagens

- Verifica se o envio de mensagem de texto utilizando um token válido retorna o status 200 de sucesso;
- Verifica se o envio de mensagem sem utilizar um token retorna o status 403 de "token invalido";
- Verifica se o envio de mensagens de áudio utilizando um token válido retorna o status 200 de sucesso;
- Verifica se o envio de mensagens de imagem utilizando um token válido retorna o status 200 de sucesso;
