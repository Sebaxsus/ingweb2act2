let num;

function chispum(num){
    if(num % 3 == 0 && num % 5 == 0){
        return "chispum";
    }else if (num % 3 == 0){
        return "chis";
    }else if (num % 5 == 0){
        return "pum";
    }else if (num == 1){
        return "ok";
    }else{
        return num;
    }
}

console.log("Primera Prueba ok, Envio un 1, recibo => " + chispum(1));

console.log("Segunda Prueba chis, Envio un multiplo de 3 que no sea multiplo de 5, recibo => " + chispum(21));

console.log("Tercera Prueba pum, Envio un multiplo de 5 que no sea multiplo de 3, recibo => " + chispum(50));

console.log("Cuarta Prueba chispum, Envio un multiplo de 5 y 3, recibo => " + chispum(30));

console.log("Actividad desarrollada por Juan Sebastian Garcia Redondo. Ing.Software");