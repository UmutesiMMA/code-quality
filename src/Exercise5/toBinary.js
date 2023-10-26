function toBinary(num){
    let result=''
    while(num>0){
        result += (num%2)
        num=Math.floor(num/2)
        toBinary(num)
    }
    return +result.split('').reverse().join('')
}