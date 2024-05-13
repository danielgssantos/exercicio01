let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número:"))

alert(`A soma dos dois números e: ${numberOne + numberTwo}`)
alert(`A subtração dos dois números e: ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números e: ${numberOne * numberTwo}`)
alert(`A divisão dos dois números e: ${numberOne - numberTwo}`)
alert(`O resto da divisão dos dois números e: ${numberOne % numberTwo}`)


let sum = (numberOne + numberTwo) % 2 


if(sum == 0)
{
    alert(`A soma dos dois números é par: ${numberOne + numberTwo}`)
}
else 
{
    alert(`A soma dos dois número e impar: ${numberOne + numberTwo}`)
}

if(numberOne === numberTwo){
    alert("Os dois números inseridos são iguais:")

}
else 
{
    alert("Os dois números inseridos são diferentes:")
}