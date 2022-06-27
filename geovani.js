function funçâo(){
let nome = ["Geovani"];
let idade = ["19"];
let pessoas = ["80"];
let data = ["04"];
//verificar as idades
if(idade >= 18){
console.log("sua idade é " + 18 + "pode passar");
}else{
console.log("não pode passar");
}
//verificar as pessoas
if(pessoas >= 100){
console.log("não pode passar");
}else{
//senão pode passar
console.log("pode passar " + nome);
console.log("numero de participantes " + pessoas);
}
  if(idade >= 18, pessoas <= 100, data <= 05){
    console.log("Deu certo");
    pessoas++;
    console.log("pessoas "+ pessoas);
  }else{
   console.log("deu errado"); 
  }
}
