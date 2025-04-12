 /*Elabore um algoritmo que receba a idade de duas pessoas e determine qual 
 é a pessoa mais velha, 
 se as idades forem iguais, mostre uma mensagem no console 
 "Ana e Carla possuem a mesma idade".*/

 /*Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.*/ 

 /*Elabore um algoritmo que receba um número e diga se o número é par ou ímpar */

 /*Elabore um algoritmo que calcule a média das notas de um estudante */

let idadeAna = Number(prompt("qual a sua idade ana"))
let idadeCarla = Number(prompt("qual a sua idade carla?"))

if(idadeAna > idadeCarla){
    alert("Ana é a mais velha")
} else if(idadeCarla > idadeAna){
    alert("Carla é mais velha")
} else {
    alert(" Ana e carla possuem a mesma idade")
}

