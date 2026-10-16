function getCount(str) {
  let newstr = str.split("")
  
  let vowel = []
  for(let i = 0; i < newstr.length; i++){
    if(newstr[i] == 'a' || newstr[i] == 'i' || newstr[i] == 'u' || newstr[i] == 'e' || newstr[i] == 'o'){
      vowel.push(newstr[i])
    }
  }
  
  return vowel.length
}