
const listStudents = [
  {nome:'Matheus', 
   nota1: 8.5, 
   nota2:6.5
  },
  {
    nome:"Camila",
    nota1:9.5,
    nota2:8.5,
  },
  {
    nome:"David",
    nota1:9.5,
    nota2:8.5,
  },
];

function calculateMedia(nota1,nota2) {
    return (nota1 + nota2) /2;
}

function verificarAprovacao(media) {
    if (media >= 7) {
        return true;
    } else {
        return false;
    }  
}

function exibirMensagemAprovacao (aluno) {
    const media = calculateMedia(aluno.nota1, aluno.nota2);
    const aprovado = verificarAprovacao (media);
    
    if(aprovado) {
        alert(`Parabéns, ${aluno.nome}! Você foi aprovado.`);
    } else {
        alert(`Você não foi aprovado ${aluno.nome}, tente outra vez!`);
    }
    
}

listStudents.forEach(exibirMensagemAprovacao);
