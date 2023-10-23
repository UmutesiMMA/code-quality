function solution(number){
    const romanNumeral={
      'M':1000,
      'CM':900,
      'D':500,
      'CD':400,
      'C':100,
      'XC':90,
      'L':50,
      'XL':40,
      'X':10,
      'IX':9,
      'V':5,
      'IV':4,
      'I':1,
    }
    let result = ''
    for(let i in romanNumeral){
    while(number>=romanNumeral[i]){
      result +=i
      number -= romanNumeral[i]
    }    
    }
    return result
    
    }
    console.log(solution(120))