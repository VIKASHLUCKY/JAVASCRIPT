// const coding = ["JS", "ruby", "Python", "C++", "c language"]
// const values = coding.forEach((item) => {
//     console.log(item)
//     return item
// })
// console.log(values)

// ------------------Filter-------------------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 6)             //Output  : [ 7, 8, 9, 10 ]
// const newNums = myNums.filter((num) => num < 5)                //Output  : [ 1, 2, 3, 4 ]
// const newNums = myNums.filter((num) => { num < 4 })                //Output  : [ ]  not access
// const newNums = myNums.filter((num) => { return num < 4 })                //Output  :[ 1, 2, 3 ] mention return than print 
// console.log(newNums)


// -------------------Projects..------------------------------------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },

    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },

    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },

    { title: 'Book Four', genre: 'JavaScript', publish: 1998, edition: 2023 },

    { title: 'Book Five', genre: 'JavaScript', publish: 1987, edition: 2014 },

    { title: 'Book Six', genre: 'C Language', publish: 1988, edition: 2016 },

    { title: 'Book Seven', genre: 'Java', publish: 19871, edition: 2001 },

    { title: 'Book Eight', genre: 'HTML', publish: 1999, edition: 1999 }
];


// let userBooks = books.filter((bk) => bk.genre === 'History')
// let userBooks = books.filter((bk) => bk.genre === 'JavaScript')
// userBooks = books.filter((bk) => { return bk.publish <= 1998 })          // jb scope me likhenge tb return keyword ki jarurat padti hai , nhi to null print krta hai .
// let userBooks = books.filter((bk) => { return bk.edition >= 2000 })
let userBooks = books.filter((bk) => { return bk.edition >= 2000 && bk.genre === 'JavaScript' })


console.log(userBooks)