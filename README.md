# DataPrev

Este projeto é um dossiê de estudo web para o concurso da Dataprev 2026, com foco no edital 001/2026 e no perfil de Desenvolvimento de Software. A aplicação reúne informações importantes do certame em uma interface interativa, incluindo resumo do concurso, linha do tempo, exploração de vagas, checklist de estudo e um chat assistido por IA para responder dúvidas com base no conteúdo disponibilizado no projeto.

## Objetivo

Criar uma ferramenta simples, visualmente organizada e útil para estudar de forma mais prática o concurso da Dataprev, centralizando informações relevantes em um único ambiente e oferecendo suporte para perguntas rápidas sobre o edital.

## Funcionalidades

- Página principal com resumo do concurso e dados principais;
- Linha do tempo com datas oficiais do edital;
- Explorador de vagas por perfil e localidade;
- Checklist de estudo para acompanhar a revisão de tópicos;
- Chat com IA integrado via API da Anthropic para responder perguntas sobre o edital;
- Interface responsiva e com estilo visual inspirado em documentos e cadernos de estudo.

## Tecnologias utilizadas

- HTML5 para estrutura da interface;
- CSS3 para estilização e layout;
- JavaScript para interatividade da página;
- Node.js + Express para servir a aplicação e expor a rota de chat;
- API da Anthropic para geração de respostas no chat.

## Estrutura do projeto

```text
DataPrev/
├── index.html          # Página principal da aplicação
├── styles.css          # Estilos visuais do projeto
├── server.js           # Servidor Express e integração com a API da Anthropic
├── package.json        # Dependências e scripts do projeto
├── LICENSE             # Licença do repositório
└── README.md           # Documentação do projeto
```

## Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- Node.js 18 ou superior;
- npm ou pnpm;
- Uma chave de API da Anthropic configurada na variável de ambiente `ANTHROPIC_API_KEY`.

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/JhonataFerreira95/DataPrev.git
cd DataPrev
```

2. Instale as dependências:

```bash
npm install
```

## Configuração da API da Anthropic

O chat com IA depende de uma variável de ambiente chamada `ANTHROPIC_API_KEY`.

No terminal, antes de iniciar a aplicação, defina a variável:

No Windows PowerShell:

```powershell
$env:ANTHROPIC_API_KEY="sua_chave_aqui"
```

No Linux/macOS:

```bash
export ANTHROPIC_API_KEY="sua_chave_aqui"
```

## Executando o projeto

Inicie o servidor local com:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Como usar

- Abra o navegador e acesse a página inicial;
- Navegue pelas abas de resumo, linha do tempo, vagas e checklist;
- No módulo de chat, faça perguntas sobre o edital e receba respostas geradas pela IA.

## Observações importantes

- O chat utiliza a API da Anthropic e depende de uma chave válida;
- As respostas devem ser verificadas sempre contra o edital oficial e documentos públicos do concurso;
- O projeto é voltado para uso pessoal e estudo, não substitui a leitura oficial do documento.

## Licença

Este projeto está licenciado sob a licença BSD 3-Clause. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
