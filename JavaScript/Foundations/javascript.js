
// Your JavaScript goes here!
console.log("Hello, World!")

let message = 'Hello friend'; //shows the string 'Hello' in the variable named message

// Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const miCumple = '01.01.1900';


alert(message); //shows the variable content

let user = 'John', 
    age = 25
    hola = 'Hola';

message = 'Hola como va?';
hola = message;
alert(message);

// There are two limitations on variable names in JavaScript:
// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

/*
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

For instance, let’s make constants for colors in so-called “web” (hexadecimal) format
*/

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

/*
We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.

When should we use capitals for a constant and when should we name it normally? Let’s make that clear.

Being a “constant” just means that a variable’s value never changes. But there are constants that are known prior to execution (like a hexadecimal value for red) and there are constants that are calculated in run-time, during the execution, but do not change after their initial assignment. */

/*  -------------------------
Working with variables
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”). */

let admin,name;

name='Jhon';
admin = name;

alert(admin);
