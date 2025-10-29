# Descubra o Número

Pequeno jogo em Node.js (console) onde o jogador tenta adivinhar um número aleatório entre 1 e 100. Implementado em `DescubraNumero.js` usando `prompt-sync` para entrada do utilizador.

## Funcionalidades
- Três níveis de dificuldade (Fácil, Médio, Difícil).
- Dicas ("maior" / "menor") após palpites incorretos.
- Bloqueio de palpites repetidos.
- Contador de tentativas restantes.
- Reinicia com um novo número após cada partida.

## Requisitos
- Node.js (versão recomendada >= 12)
- npm (opcional para instalar dependências)

## Instalação / Execução (Windows)
1. Abra o terminal integrado do VS Code ou PowerShell.
2. Vá para a pasta do jogo:

3.Clonar o repositório:
git clone https://github.com/Goreth-Lima/descobrirNumero.git
4. Instale a dependência:
   npm install prompt-sync
5. Execute o jogo:
   node DescubraNumero.js

## Como Jogar
- Ao iniciar, selecione o nível:
  - 1 — Fácil (10 chances)
  - 2 — Médio (5 chances)
  - 3 — Difícil (3 chances)
  - Qualquer outra opção encerra o jogo.
- Insira um palpite entre 1 e 100.
- O jogo informa se o palpite já foi tentado, quantos erros já teve, e fornece uma dica se o número sorteado é maior ou menor.
- Quando as chances acabam ou o jogador acerta, a rodada termina e é gerado um novo número se o jogador optar por continuar.

## Estrutura do ficheiro (breve)
- Constantes: `CHANCESF`, `CHANCESM`, `CHANCESD`
- Funções principais:
  - `titulo(texto)` — imprime título formatado.
  - `nivelDoJogo(nivel, chances)` — lógica geral para uma rodada (usada pelo menu).

## Personalização
- Alterar faixa do número: modificar `Math.floor(Math.random() * 100) + 1`.
- Alterar número de chances: editar as constantes `CHANCESF`, `CHANCESM`, `CHANCESD`.

## Depuração
- Se entradas estiverem a dar `NaN`, verifique se a sua instalação do `prompt-sync` está correcta e se está a executar o script com `node`.
- Mensagens e fluxo são imprimidos no console — execute a partir de um terminal para ver logs.

## Autores
. Goreth-Lima

## Agradecimentos
 . Agradeço o Roadmap.sh pela ideia desse projeto. 
