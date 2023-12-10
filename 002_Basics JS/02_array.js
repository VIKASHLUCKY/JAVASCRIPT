const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// ==================================Two Arrays Add push Mathod========================================================

marvel_heros.push(dc_heros)    //  push method 
// console.log(marvel_heros);

// output = [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]


// console.log(marvel_heros[0]);      // index wise output    =  thor
// console.log(marvel_heros[2]);       // index wise output    =  spiderman
// console.log(marvel_heros[3][1])     // index wise output    =  flash

// ===================================Two Arrays concatnation=======================================================

const All_Heros = marvel_heros.concat(dc_heros)     //   concatnation  one mixing arrays 
// console.log(All_Heros)

// output = [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(All_Heros[5])     // index wise output = batman

// ===================================Two Arrays Spread  most import (...) =======================================================

const all_new_arrays = [...marvel_heros, ...dc_heros]   // Spread  Method
// console.log(all_new_arrays)



// ===================================flat Method ==================================================================

const another_array = [1, 2, 3, [4, 5, 6,], 7, [8, 8, 10, [11, 12]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// output = [ 1,  2, 3, 4,  5, 6,  7, 8, 8, 10, 11, 12]



// ==================================================================================================
console.log(Array.isArray("Hitesh"))   //  this is not array
console.log(Array.from("Hitesh"))        // This is Array 

console.log(Array.from({ name: "Vikash" }))    // interesting     (Output  : [])


// ====================================================================================================

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


