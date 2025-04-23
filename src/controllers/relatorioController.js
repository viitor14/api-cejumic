import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import Beneficiario from '../models/Beneficiario';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class RelatorioController {
  async gerarRelatorio(req, res) {
    try {
      // Busca os beneficiários
      const beneficiarios = await Beneficiario.findAll({
        attributes: [
          'nome',
          'cpf',
          'dataNascimento',
          'endereco',
          'bairro',
          'cep',
          'cidade',
          'estado',
          'status',
          'created_at',
          'id',
        ],
      });

      // Monta o prompt
      const prompt = `
Você é um assistente que gera relatórios em HTML detalhados para ONGs com base em dados de beneficiários.

Com base nos dados abaixo, gere um relatório **completo** em **HTML puro**, pronto para exibição em um navegador.

⚠️ IMPORTANTE:
- NÃO use JavaScript ou React no HTML (ex: não usar {beneficiario.nome} nem .map()).
- O HTML deve estar totalmente renderizado, ou seja, cada dado real já inserido no texto.
- Use <div>, <h1>-<h4>, <p>, <ul>, <li> para organizar o conteúdo de forma clara e visualmente agradável.

### DADOS:
${JSON.stringify(beneficiarios)}

### ESTRUTURA DO RELATÓRIO:
1. <h2>Total de Beneficiários</h2> (mostrar o número e listar todos os nomes)
2. <h2>Beneficiários por Status</h2>
   - Ativos (nome, CPF, cidade, estado)
   - Inativos (nome, CPF, cidade, estado)
3. <h2>Beneficiários por Cidade</h2>
   - Para cada cidade, listar os beneficiários que moram nela
4. <h2>Lista Completa</h2>
   - Nome - CPF - Cidade - Status
`;

      // Faz a chamada para a OpenAI
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'Você é um assistente que gera relatórios detalhados para ONGs com base nos dados fornecidos.',
          },
          { role: 'user', content: prompt },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      });

      const resultado = response.choices[0].message.content;

      // Envia a resposta de volta
      res.send({ resposta: resultado });
    } catch (error) {
      console.error('Erro ao gerar relatório com OpenAI:', error.message);
      res.status(500).json({ erro: 'Erro ao gerar relatório.' });
    }
  }
}

export default new RelatorioController();
