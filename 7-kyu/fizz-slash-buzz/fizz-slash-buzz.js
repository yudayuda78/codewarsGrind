function solution(number){
  let a = []
  let b = []
  let c = []
  for(let i = 1; i < number; i++){
    if(i % 3 === 0 && i % 5 !== 0){
      a.push(i)
    }
    
    if(i % 5 === 0 && i % 3 !== 0){
      b.push(i)
    }
    
    if(i % 5 === 0 && i % 3 === 0){
      c.push(i)
    }
  }
  
  let total = []
  total.push(a.length)
  total.push(b.length)
  total.push(c.length)
  return total
}