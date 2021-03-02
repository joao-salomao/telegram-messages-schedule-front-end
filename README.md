# telegram-messages-schedule-front-end

## Descrição

O projeto consiste em criar um agendador de mensagens para o aplicativo Telegram, assim os gerenciadores de comunidades poderão agendar o envio de mensagens para os grupos do aplicativo.

## Inspirações

### Inspiração de funcionalidade

A inspiração para o projeto surgiu da necessidade de agendar o envio de uma grande quantidade de mensagens para o Telegram, porém, todas as ferramentas já existentes que resolvem esse problema são pagas. A partir disso surgiu a ideia de usar ferramentas open-source para resolver essa dor.

### Inspiração de tela

O próprio aplicativo do Telegram que possui uma interface amigável e de fácil navegação.

## Descrição da funcionalidade

A principal funcionalidade do sistema é realizar o agendamento de mensagens para um determinado conjunto de grupos, sendo possível definir um título, o conteúdo, a data e hora de envio e os grupos alvos. Esses dados ficam armazenados em um banco de dados que é verificado periodicamente por um Bot que se comunica com a API do Telegram e realiza o envio das mensagens agendadas para os seus respectivos grupos alvos.

## Contato dos desenvolvedores

[Helena Tamanini](https://github.com/helenatamanini)

[João Salomão](https://github.com/joao-salomao)

[Nathalia Mendes Viana](https://github.com/nmv20)

## Rodando o projeto

Instalando dependências

```
npm install
```

Rodando servidor de desenvolvimento

```
npm run serve
```

Buildando aplicação pra produção

```
npm run build
```
