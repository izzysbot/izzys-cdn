# IZZYS-CDN

Bem-vindo ao Izzys-cdn Antes de começarmos, certifique-se de ter tudo pronto para uma experiência tranquila.

## Pré-requisitos

Antes de iniciar, assegure-se de ter as seguintes informações e ferramentas à mão:

- **Token do Bot Discord**
- **Servidor e ID do Canal**
- **Servidor Redis** 

Certifique-se também de ter o Node.js instalado em sua máquina, com a versão 16x ou superior.

## Configuração

1. Crie um arquivo `.env` na raiz do seu projeto e adicione as seguintes informações:

    ```plaintext
    REDIS_URL=urldadatabaseredis
    DISCORD_BOT_TOKEN=tokendobot
    DISCORD_CHANNEL_ID=iddocanalparaenviararquivos
    PORT=5000
    ```

2. Instale as dependências do projeto usando um dos comandos a seguir:

    ```bash
    npm install
    # ou
    yarn install
    ```

## Executando o Projeto

Após a configuração, execute o seguinte comando para iniciar o projeto:

```bash
npm start
# ou
yarn start
