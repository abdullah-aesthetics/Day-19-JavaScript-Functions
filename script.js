// ==================================================
// JavaScript Utility Library
// Day 19 - JavaScript Functions & Scope
// ==================================================


// ---------- A. THE FUNCTIONS ----------

// 1. Total price: price x quantity (function declaration)
// price and quantity are parameters, the value we send in a call is the argument
function calculateTotalPrice(price, quantity) {
    return price * quantity;   // return sends the answer back to whoever called the function
}

// 2. Percentage: obtained marks out of total marks (function expression)
// The function is stored in a const, so it must be created before it is called
const calculatePercentage = function (obtainedMarks, totalMarks) {
    // Multiply by 100 first so the answer stays exact
    return (obtainedMarks * 100) / totalMarks;
};

// 3. Grade result: turns a percentage into a result (function declaration)
function getGradeResult(percentage) {
    if (percentage >= 80) {
        return "Distinction";
    } else if (percentage >= 60) {
        return "Good";
    } else if (percentage >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// 4a. Helper: capitalizes one word, "aLI " becomes "Ali" (arrow function)
// trim() removes extra spaces, then the first letter becomes capital and the rest small
const capitalizeWord = (word) => {
    const cleanWord = word.trim();
    return cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1).toLowerCase();
};

// 4b. Full name: combines first and last name in a proper format
// It reuses capitalizeWord, so the capital-letter logic is written only once
function formatFullName(firstName, lastName) {
    return capitalizeWord(firstName) + " " + capitalizeWord(lastName);
}


// ---------- B. TESTING EACH FUNCTION WITH DIFFERENT INPUTS ----------

console.log("===== Total Price Calculator =====");
console.log("Price 250, quantity 3:", calculateTotalPrice(250, 3));
console.log("Price 1200, quantity 2:", calculateTotalPrice(1200, 2));
console.log("Price 49.99, quantity 2:", calculateTotalPrice(49.99, 2));
console.log("Price 150, quantity 4:", calculateTotalPrice(150, 4));
console.log("Price 899, quantity 3:", calculateTotalPrice(899, 3));
console.log("Price 12.5, quantity 8:", calculateTotalPrice(12.5, 8));

console.log("===== Percentage Calculator =====");
console.log("417 out of 500:", calculatePercentage(417, 500) + "%");
console.log("45 out of 60:", calculatePercentage(45, 60) + "%");
console.log("180 out of 200:", calculatePercentage(180, 200) + "%");
console.log("249 out of 500:", calculatePercentage(249, 500) + "%");

console.log("===== Grade Result Checker =====");
console.log("90%:", getGradeResult(90));
console.log("80%:", getGradeResult(80));     // boundary: exactly 80 is Distinction
console.log("79.9%:", getGradeResult(79.9));
console.log("60%:", getGradeResult(60));     // boundary: exactly 60 is Good
console.log("55%:", getGradeResult(55));
console.log("50%:", getGradeResult(50));     // boundary: exactly 50 is Pass
console.log("49.9%:", getGradeResult(49.9));

console.log("===== String Formatting =====");
console.log(formatFullName("abdullah", "aamir"));
console.log(formatFullName("  SARA ", "khan"));
console.log(formatFullName("aLi", "RAZA"));


// ---------- C. USING THE FUNCTIONS TOGETHER ----------
// The value returned by one function can be given to another function
console.log("===== Student Reports =====");

const firstStudentPercentage = calculatePercentage(417, 500);
console.log(
    formatFullName("abdullah", "aamir"),
    "- " + firstStudentPercentage.toFixed(2) + "% -",
    getGradeResult(firstStudentPercentage)
);

const secondStudentPercentage = calculatePercentage(285, 500);
console.log(
    formatFullName("SARA", "khan"),
    "- " + secondStudentPercentage.toFixed(2) + "% -",
    getGradeResult(secondStudentPercentage)
);

const thirdStudentPercentage = calculatePercentage(210, 500);
console.log(
    formatFullName("ali", "RAZA"),
    "- " + thirdStudentPercentage.toFixed(2) + "% -",
    getGradeResult(thirdStudentPercentage)
);


// ---------- D. SCOPE DEMONSTRATION ----------

// Global variable: declared outside every function, so it can be used anywhere in the file
const universityName = "Lahore Garrison University";

// This function reads the global variable from inside
function showGlobalVariable() {
    console.log("Inside the function, the global variable is:", universityName);
}

// This function creates a local variable
function showLocalVariable() {
    // Local variable: it exists only inside this function
    const localMessage = "I can only be used inside showLocalVariable()";
    console.log("Inside the function, the local variable is:", localMessage);
}

console.log("===== Scope Demonstration =====");
showGlobalVariable();
showLocalVariable();
console.log("Outside the function, the global variable is:", universityName);   // works

// The local variable does not exist outside its function.
// Writing console.log(localMessage) here would stop the program with:
// ReferenceError: localMessage is not defined
// typeof is a safe way to check without an error: "undefined" means it is not accessible here
console.log("Outside the function, typeof localMessage is:", typeof localMessage);
