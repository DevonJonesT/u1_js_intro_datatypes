//console.log('hello world!');
//console.log(138 ** 2)

//Math.class

//console.log(Math.pow(3,3))

//let age = 33
//let firstName = "Devon"
//let monthsInYear = 12
//let ageInMonths = age * monthsInYear
//console.log(ageInMonths)


//console.log(`hello my name is ${firstName} and i am ${age} years old`)


//numberOfLives = 3
//numberOfLives =+ 1
//numberOfLives =- 1


//let isLoggedIn = true
//let isActive = false

//AND && => both have to be true
//OR || => only one has to be true

//let hoopers = ['bron', 'kd', 'ant']
//console.log(hoopers)

//let friends = ['brian',
     //'miles',
      //'zach',
       //'eunice',
    //'mark',
//'shayla',
//'jorge']
//console.log(friends.length)


//const annoyingArray = [0, 1, [2,3], [4, [5,6]], 7, [8,9, 10]]
//console.log(annoyingArray[2][0])

//const fruits = ['apple', 'orange', 'strawberry', 
    //'kiwi', 'grapes', 'mangos', 'pineapple']

   // console.log('Stella loves${fruits[2]}')

//fruits.push('peach')
//fruits.unshift('watermelon')

//fruits.reverse()
//console.log(fruits)

//prompt 1

let myFavoriteSong = 'Imaginary Players'
console.log(myFavoriteSong)
console.log(`My favorite song is ${myFavoriteSong}`)

//prompt 2

let favoriteFood = ('sushi')
let favoriteSport = ('basketball')
let myName = ('devon')
console.log(`my name is ${myName} and my favorite thing to do it to watch ${favoriteSport} while eating ${favoriteFood}`)

//prompt 3

let number = 21
console.log(number + 5)
console.log(number - 10)
console.log(number * 3)
console.log(number / 7)
console.log(3 % 2)



//prompt 4

let firstName = devon 
let lastName = jones
let fullName = (firstName + " " + lastName)
console.log(`hello my name is ${fullName}`)


//arrays

let movies = ['chef', 'space jam', 'life', 'infinity war', 'karate kid', 'cars', 'barbie']
console.log(movies[1])
movies.unshift('the wood')
movies.push('Thor')
movies.splice(1, 0,"Harry Potter")
console.log(movies)


// Retrieve "Marty McFly" from each of the arrays below.

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion']
console.log(array1[2])

let array2 = [
    ['Marty Feldman', 'Marty Marion'],
    ['Marty Stuart', 'Marty McFly'],
    ['Marty Jannetty', 'Marty Robbins']
  ];
  console.log[array2[1][1]]


  let array3 = [
    ['Marty Feldman', ['Marty Marion']],
    ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
  ];
  console.log(array3[4])



// Use the length of the array below to retrieve the second to last item.
  
let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4[array4.length -2])

//Use the following arrays to answer the subprompts below.

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

thom[0] = 'Tom'
console.log(thom)

karolin[1] = 17
console.log(karolin)

cathleen[2] = 'Gotham City'
console.log(cathleen)

kristyn[2] = 'Oakland'
console.log(kristyn) 