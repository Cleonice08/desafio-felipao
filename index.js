let nomeHeroi = "Cleo";
let xp = 10.000;
let nivel;

if(xp < 1.000){
    nivel = "Ferro";
} else if(xp <= 2.000){
    nivel = "Bronze";
} else if(xp <= 5.000){
    nivel = "Prata";
} else if(xp <= 7.000){
    nivel = "Ouro";
} else if(xp <= 8.000){
    nivel = "Platina";
} else if( xp <= 9.000){
    nivel = "Ascendente";
} else if(xp <= 10.000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}`);