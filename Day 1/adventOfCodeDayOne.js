// OPTIMIZATION - This must currently be run in the browser console to take in the list of numbers; fetching the data using the list's URL would make this fully automated
//
// Check these stackoverflow pages to learn how to pull web content from URL: 
// 1. https://stackoverflow.com/questions/10642289/return-html-content-as-a-string-given-url-javascript-function
// 2. https://stackoverflow.com/questions/6375461/get-html-code-using-javascript-with-a-url

/*
//
// -- Part One --
//
*/

// use in console at https://adventofcode.com/2021/day/1/input

function listToArray() {
    let nums = document.querySelector('pre').innerText
    const numArray = nums.split("\n")
    return numArray
}

function increasedOrDecreased(numsToCompare) {
    const result = []
    for (let i = 1; i <= numsToCompare.length; i++) {
        result[i] = numsToCompare[i] - numsToCompare[i - 1] > 0 ? "increased" : "decreased"
    }
    const numsIncreased = result.filter(e => e === "increased").length
    return numsIncreased
}

increasedOrDecreased(listToArray()) // Returns 1713

/*
//
// -- Part Two --
//
*/

// TODO