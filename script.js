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
];

alert(`
  Paciente ${patients[0].name} possui o IMC de
  ${patients[0].weight / (patients[0].height / 100) ** 2} 

`);
