console.log('hello world');

function suma(...num) {
    console.log(num);
    // let acum = 0
    // for (let i = 0; i < num.length; i++){
    //     //acum += num[i]
    //     acum = acum + num[i]
    // }

    return num.reduce(function (acum, num){
        acum += num;
        return acum
    }, 0)
}

function dobles(...num) {
    const resultado = []
    for (let i = 0; i < num.length; i++){
        resultado.push(num[i] * 2)
    }
    return resultado
}

var dobleES6 = (...nums) => {
    return nums.map(function (numero) {
        return numero * 3
    })
}

dobleES6(3,5);

suma(3, 3)