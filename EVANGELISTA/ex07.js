//Criar um programa que exiba as seguintes mensagens: SE menor que 16 anos "não pode votar". SE tiver entre 16 e 18 e maior que 70 anos "voto facultativo". Se tiver entre 18 e 70 anos "voto obrigatorio".
let idade=13
if (idade < 16) {console.log("não pode votar");} else if (idade >= 16 && idade < 18 || idade > 70) {console.log("voto facultativo")}else{console.log("Voto obrigatório")}

