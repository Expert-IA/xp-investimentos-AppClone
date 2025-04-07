Este projeto é um clone do aplicativo da XP Investimentos, feito com React Native usando Expo. A principal diferença é a integração do ExpertIA, uma inteligência artificial criada para simplificar a linguagem do mercado financeiro. O objetivo é tornar os investimentos mais acessíveis para todos, traduzindo termos técnicos em explicações mais fáceis de entender.
Como o projeto está organizado:

    components/commons/dynamic: onde ficam os componentes dinâmicos, que são renderizados com base nos códigos enviados pelo backend, como por exemplo "GP01", "GP02" etc.

    contexts: aqui estão os contextos globais da aplicação, como o de WebSocket e o de estado geral do app.

    domain/enum e domain/model: usados para guardar os tipos e enums da aplicação (ex: tipos de investimento, status, etc.).

    navigation: onde fica o controle das rotas e navegação entre telas.

    pages: contém as páginas principais do app.

    service: onde estão os serviços, como requisições com Axios, cache local e comunicação com WebSocket.

Como rodar:

    Instale as dependências com npm install

    Inicie o app com npx expo start

Você pode testar no celular com o Expo Go, ou usar emuladores Android/iOS, ou abrir no navegador.
