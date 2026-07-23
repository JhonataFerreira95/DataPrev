import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));

app.post("/chat", async (req, res) => {
  const { messages, system } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Falta a variável de ambiente ANTHROPIC_API_KEY" });
  }
  if (!Array.isArray(messages)) {
    return res.status(400).json({ error: "Formato de mensagens inválido" });
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5",
        max_tokens: 1000,
        system,
        messages,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json(data);
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao chamar a API Anthropic" });
  }
});

// Sobe servidor tradicional só quando rodando localmente (ex: `node server.js`).
// No Vercel, este arquivo é importado como módulo e a exportação abaixo
// é o que a função serverless usa para responder às requisições.
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
}

export default app;