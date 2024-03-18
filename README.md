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
```

### ⚠️ | Bug:
Cloudflare está barrando arquivos acima de 100MB.

#### Descrição do Problema:
Ao tentar enviar arquivos acima de 100MB, recebemos uma mensagem de falha de upload. No entanto, após investigação mais aprofundada, determinamos que o problema não está no sistema em si. Suspeitamos que isso possa ser causado por uma interação entre o proxy da nossa atual hospedagem (Squarecloud) e a Cloudflare, ou pode ser apenas um problema com a configuração da Cloudflare.

#### Ações Tomadas:
Estaremos realizando testes em outros ambientes sem o proxy para determinar a causa raiz do problema e encontrar uma solução adequada.
