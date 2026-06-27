# 🧙 Trybewarts Wizarding School

O **Trybewarts Wizarding School** é um projeto de desenvolvimento web focado na criação de uma página de formulário responsiva e dinâmica baseada na Escola de Magia de Trybewarts (inspirada no universo de Harry Potter). O objetivo principal foi construir uma interface onde as pessoas estudantes pudessem enviar seus feedbacks sobre a escola, aplicando conceitos avançados de estruturação de layouts e manipulação do DOM.

---

## 🚀 O que foi desenvolvido

Neste projeto, desenvolvi uma aplicação web completa (HTML, CSS e JavaScript) utilizando uma abordagem estruturada e organizada por branchs. As principais implementações e regras de negócio incluem:

### 📑 Estruturação HTML & Estilização CSS
*   **Cabeçalho Flexbox:** Criação de um `header` verde utilizando `display: flex` para alinhar de forma simétrica a logo, o título centralizado `Trybewarts` e o formulário de login.
*   **Formulário de Feedback:** Construção do formulário principal (`#evaluation-form`) posicionado de maneira responsiva na vertical (`flex-direction: column`) com largura fixa de 675px.
*   **Componentes de Interface (UI):** Organização de múltiplos tipos de inputs lado a lado (como Nome/Sobrenome e Email/Casa), além de blocos estruturados de botões do tipo `radio` e caixas de seleção (`checkbox`).
*   **Rodapé:** Inclusão de um `footer` para os direitos reservados da página.

### ⚙️ Comportamento e Lógica (JavaScript)
*   **Autenticação de Login:** Sistema de validação no cabeçalho onde as credenciais corretas disparam um alerta de boas-vindas ("Olá, Tryber!") e dados incorretos exibem uma mensagem de erro.
*   **Termos de Compromisso:** Lógica que mantém o botão de envio ("Enviar") desabilitado por padrão, tornando-o ativo apenas quando o usuário marca a caixa de consentimento de uso de informações.
*   **Contador Dinâmico (Bônus):** Implementação de um contador de caracteres em tempo real atrelado à `textarea`, iniciando em 500 e decrementando de forma dinâmica conforme o usuário digita suas respostas.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica da página.
*   **CSS3 (Flexbox):** Alinhamento, responsividade e diagramação dos componentes baseados no protótipo.
*   **JavaScript (ES6+):** Manipulação dinâmica do DOM, escutadores de eventos (`EventListeners`) e validação de dados.
*   **Linters (ESLint & Stylelint):** Ferramentas de análise estática aplicadas para garantir as boas práticas de código e formatação.
*   **Cypress:** Framework utilizado para rodar e validar todos os testes automatizados da interface de ponta a ponta (E2E).

---

## 🔧 Como Instalar e Rodar o Projeto

1. Clone o repositório para sua máquina local:
   ```bash
   git clone [https://github.com/seu-usuario/sd-040-project-trybewarts.git](https://github.com/seu-usuario/sd-040-project-trybewarts.git)
    - `cd trybewarts`
    - `nvm use 16`
    - `npm install`
