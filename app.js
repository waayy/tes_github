var panglay = (x, y) => {
    if(y == 1){
        return x;    
    } else {
        return x = x * pangkat(x, y-1)
    }
}

console.log(pangkat(2,3))