# 🚗 Rota Motors - Formulário de Atendimento Integrado com Google Sheets

Um projeto de formulário web moderno, responsivo e com design *dark mode* premium, desenvolvido para concessionárias e lojas de veículos. O formulário capta leads (agendamento de test drive, cotações e financiamentos) e envia os dados diretamente para uma planilha do Google Sheets, sem a necessidade de um servidor back-end tradicional.

## ✨ Funcionalidades

- **Design Premium Dark Mode:** Interface elegante e focada na conversão, utilizando tons de carbono e vermelho fosco.
- **Validação e Acessibilidade:** Campos obrigatórios e estrutura semântica.
- **Integração Direta via Fetch API:** Envio assíncrono dos dados em segundo plano, sem recarregar a página.
- **Back-end Serverless:** Utiliza o Google Apps Script para receber requisições POST e preencher o Google Sheets.
- **Feedback Visual:** Mensagens de status claras para o usuário (carregamento, sucesso e erro).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização, variáveis nativas (`:root`), Flexbox e design responsivo.
- **JavaScript (Vanilla):** Manipulação do DOM e requisições HTTP (`fetch`).
- **Google Apps Script:** Código rodando no ecossistema do Google para salvar os dados na planilha.

## 📂 Estrutura do Projeto

```text
├── index.html    # Estrutura do formulário
├── style.css     # Estilização completa (Dark Mode)
├── script.js     # Lógica de envio e integração com a API
└── README.md     # Documentação do projeto
