const teste1=[1,2,3,4,5,6,7,8,9,10]

/* function pares(array){
    let saida=[]
    for (var i=0; i<array.length; i++){
        if (array[i]%2==0){
            saida.push(array[i])
        }
    }
    return saida
} */

function pares(array){
    return array.filter(num => num%2==0)
}

console.log(pares(teste1))