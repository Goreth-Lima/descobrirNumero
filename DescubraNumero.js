const prompt = require("prompt-sync")();
console.log("Bem-vindo ao jogo descubra o número!");

let sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCESF = 10;
const CHANCESM = 5;
const CHANCESD = 3;

function titulo(texto) {
  console.log();
  console.log(texto);
  console.log("=".repeat(40));
}

function nivelDoJogo(nivel, chances) {
  const erros = [];

  titulo(`===< Nível ${nivel} >===\nEscolha um número entre 1 e 100.\nTens ${chances} chanches!`);
  do {
    const escolha = Number(prompt("Insira o seu palpite: "));

    if (escolha === sorteado) {
      return console.log(`Parabéns! Número sorteado ${sorteado}`);
    }
    else{
      if (erros.includes(escolha)) {
        console.log(`Já apostou o número ${escolha}. Tente outro...`);
      } else {
        erros.push(escolha);
        const numErros = erros.length;
        const numeroChances = chances - numErros;
        console.log(`Resposta errada: ${numErros}\nOs seus palpites: ${erros.join(",")}`);
        console.log(`Número de tentativas restantes: ${numeroChances}`);
        if (numeroChances === 0) {
         return console.log(`Suas chances acabaram\nGame over!! Número sorteado ${sorteado}.`);
        } else {
          const dica = escolha < sorteado ? "maior" : "menor";
          console.log(`Dica: Tente um número ${dica} que ${escolha}`);
          console.log("=".repeat(40));
        }
      }
    }
  } while (true);
}

do {
  titulo("===< Selecione o nível de dificuldade >===");
  console.log("1. Fácil");
  console.log("2. Médio");
  console.log("3. Difícil");
  console.log("Sair");

  const opcao = Number(prompt(" Opção: "));

if (opcao === 1) {
  nivelDoJogo("Fácil", CHANCESF);
} else if (opcao === 2) {
  nivelDoJogo("Médio", CHANCESM);
} else if (opcao === 3) {
  nivelDoJogo("Difícil", CHANCESD);
} else {
  break;
}
sorteado = Math.floor(Math.random() * 100) + 1;
} while (true);
console.log("Obrigado por jogar!");



