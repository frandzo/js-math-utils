function showNumber(num){
    console.log("El nro es "+num);
}

function sum(a,b){
    console.log(a+b);
}

function prom(a,b){
    console.log((a+b)/2);
}

function max(a,b){
    if(a>b){
        console.log("el mayor es "+a);
    }else if(a<b){
        console.log("el mayor es "+b);
    }else{
        console.log("son iguales");
    }
}

function resta(a,b){
    console.log(a-b);
}

function redondeo(a){
    let mod=a%1;
    if(mod<0.5){
        console.log(a-mod);
    }else{
        console.log(a-mod+1);
    }
}
