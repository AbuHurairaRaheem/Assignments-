
// Ch-20  for loops nested
const firstNames = ["Lil", "Big"]
const lastNames = ["Zzz", "Boom"]

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        console.log(firstNames[i] + " " + lastNames[j])
    }
}


// agr  outer ko 3 time run kren, inner loop  runs 2 times each = 3 * 2 = 6 total runs

for (let i = 0; i < firstNames.length; i++) {
    for (let j = 0; j < lastNames.length; j++) {
        if (i !== j) {
            console.log("Not same index: " + firstNames[i] + " " + lastNames[j])
        }
    }
}

// Ch-21 Changing case
let userInput = "HELLO world"
console.log(userInput.toLowerCase())

let cityInput = "kaRacHi";
if (cityInput.toUpperCase() === "KARACHI") {
    console.log("City matched after normalization")
}

// Ch-22 Strings: measuring length and extracting parts
let str = "JavaScriptRocks"
console.log(str.slice(0, 5))

let userStr = "helloWorld"
console.log("Last character:", userStr.charAt(userStr.length - 1))

let fullName = "Abu Huraira"
console.log("Length of full name:", fullName.length)

// Ch-23 Strings: finding segments
let sentence = "The lazy dog sleeps."
console.log("Position of 'dog':", sentence.indexOf("dog"))

let input = "hello world!"
console.log("Contains 'hello'?", input.indexOf("hello") !== -1)


// Ch-24 Strings: finding character at location
console.log("Char at pos 4:", "JavaScript".charAt(4))

let anyStr = "Pakistan"
let pos = 3;
console.log("User char at pos:", anyStr.charAt(pos))
console.log("Out of bounds:", anyStr.charAt(100))

// Ch-25 Strings: replacing characters
let ex = "This is a bad example.";
console.log(ex.replace("bad", "good"));

let msg = "JS is short for JS";
console.log(msg.replace(/JS/g, "JavaScript"));

let template = "Hello, NAME";
console.log(template.replace("NAME", "Abu"));

// Ch-26  Rounding numbers
console.log("Math.round(2.6):", Math.round(2.6));
console.log("Math.floor(2.6):", Math.floor(2.6));
console.log("Math.ceil(2.6):", Math.ceil(2.6));

let userNum = 4.3;
console.log("Rounded user number:", Math.round(userNum));

console.log("Math.floor(-2.9):", Math.floor(-2.9));
console.log("Math.ceil(-2.9):", Math.ceil(-2.9));


// Ch-27 Random numbers
let dice = Math.floor(Math.random() * 6) + 1
console.log("Dice roll:", dice)

let coin = Math.random() < 0.5 ? "Heads" : "Tails"
console.log("Coin toss:", coin)

let password = Math.floor(1000 + Math.random() * 9000)
console.log("Random password:", password)

// Ch-28 String to numbers
let strFloat = "45.67"
console.log("Parsed float:", parseFloat(strFloat))

let intStr = "123px"
console.log("Parsed int:", parseInt(intStr))

console.log("Invalid parse:", parseInt("abc"))

// Ch-29 Number to string and vice versa
let num = 123
console.log("To string:", num.toString(), typeof num.toString())

let yearStr = "2025";
console.log("Add 10:", Number(yearStr) + 10)

// parseInt stops at non-digit,
console.log(parseInt("123abc"))
console.log(Number("123abc")) 

// Ch-30 Decimals
let decNum = 123.45678
console.log("Fixed to 2:", decNum.toFixed(2))

console.log("Rounded 12.999:", Number("12.999").toFixed(1))

let decimal = 3.1415926
console.log("User rounded:", decimal.toFixed(3))

// Ch-31 Current date
let now = new Date()
console.log("Current date/time:", now)

console.log("Current year:", now.getFullYear())

let hours = now.getHours()
console.log("Greeting:", hours < 12 ? "Good Morning" : "Good Afternoon/Evening")

// Ch-32 Date parts
console.log("Day:", now.getDate())
console.log("Month:", now.getMonth() + 1) 
console.log("Year:", now.getFullYear())

console.log("Time:", now.getHours() + ":" + now.getMinutes())
