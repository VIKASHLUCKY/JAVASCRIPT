
// for in loop  working


const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    py: 'Python',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} : shortcut is for ${myObject[key]}`)
}


// ****************************************************************

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key)                    //print Index number
    // console.log(programming)                // 5 time array print
    // console.log(programming[key])        // value print
}


// ==================================================

const coding = ["Person", "Man", "Domain", "Hello"]

coding.forEach(function (result) {
    // console.log(result)
})
// -------------------------------------
// map function  // Access Coding Array
coding.forEach((items) => {
    // console.log(items);
})
// --------------------------------------
// function printMe  // Access Coding Array
function printMe(item) {
    // console.log(item)
}
coding.forEach(printMe)

// --------------------------------------
// Access Coding Array

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr)
})

// --------------------------------------


const coder = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }

]

coder.forEach((language) => {
    console.log(language.languageName)
})