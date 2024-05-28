/*
Dada uma lista de pacientes, descubra o IMC  de cada paciente e imprima

"Paciente X possui o IMC de: Y"

Onde X é o nome do paciente e Y é o IMC desse paciente

Crie uma função para fazer o cálculo de IMC
*/

//    Peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 24,
    weight: 78,
    height: 182,
  },
  {
    name: "Matheus",
    age: 24,
    weight: 79,
    height: 183,
  },
  {
    name: "Camila",
    age: 29,
    weight: 64,
    height: 169,
  },
];
// ${(patients.weight / (patients.height / 100) ** 2).toFixed(2)}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2);
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  
  `;
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient);
  alert(IMCmessage);
}

//criação, depois o javascript irá guardar em memória
// function liquidificador(fruta1, fruta2) {
//   const suco = fruta1 + fruta2;
//   return suco;
// }

// //Execução
// let MeuSuco = liquidificador("maça" ,  "banana")

// alert(MeuSuco)
