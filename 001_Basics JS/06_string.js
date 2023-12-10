const name = "Vikash"
const repoCount = 50

console.log(name + repoCount + " Jaunpur Coder")    // bad coding 

// console.log(`My name is  ${} and my repo count is ${}`);  //its good syntax coding  using backtick and use value dolor sign and curly brackets
console.log(`My name is  ${name} and my repo count is ${repoCount}`);  //its good  coding 
console.log(`My name is  ${name} and my repo count is ${repoCount}`);  //its good  coding 



// define String 
console.log('Define String')
// ================================================

const gameName = "StyleGame"
console.log(gameName)
console.log(typeof gameName)

// ====================================================================
const GameName = new String('StyleGaming')
console.log(GameName);
console.log(typeof GameName)

console.log(GameName.length)   //  checking Length
console.log(GameName[1])    //  Index Wise Printing Value 
console.log(GameName.toUpperCase())  // toUpperCase
console.log(GameName.toLowerCase())  // toLowerCase
console.log(GameName.charAt(5))    // 5 index pe kaun sa char hai 
console.log(GameName.indexOf('G'))   // g kis index pe hai 


// =========================================================================

const newString = GameName.substring(0, 5)
console.log(newString);

const anotherString = GameName.slice(2, 5)
console.log(anotherString)

const newStringOne = "    Lucky     "
console.log(newStringOne)            // printing with space 
console.log(newStringOne.trim())     // removing extra space 

// ================================================================================
const url = "https://dummyjson.com/"
console.log(url.replace('.', '_'))    // url any symbol or char change / replace
console.log(url.replace('com', 'co'))  // url any symbol or char change / replace

console.log(url.includes('dummyjson'));   //url  searching word
console.log(url.includes('luck'));   // searching word

console.log(GameName.split('_'))



