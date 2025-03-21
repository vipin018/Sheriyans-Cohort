
// que 1 : remove duplicate values from an array

console.groupCollapsed("remove duplicate values from an array")
let arr = [12, 1, 3, 4, 1, 4, 6, 4, 21, 4, 2, 0]
let ans = [...new Set(arr)];
console.log(ans);
console.groupEnd();

// que 2:  Find the second largest number in an array

console.groupCollapsed("find second largest elem in array")

let arr2 = [12, 1, 13, 40, 11, -4, 26, 4, 21, 4, 2, 0]

let unique = [...new Set(arr2)];

let sorted = unique.sort(function (a, b) {
    return a - b; //for ascending order
    //return b-a; //for descending order
});
console.log(sorted[sorted.length - 2])
console.groupEnd();

// que 3: Reverse an array without using .reverse()

console.groupCollapsed("reverse an array without using .reverse()")

let arr3 = [12, 1, 13, 40, 11, 0]

let revAns = [];
for (let i = arr3.length - 1; i >= 0; i--) {
    revAns.push(arr3[i])
}
console.log(revAns)
console.groupEnd();

// que 4: Find the most frequent element in an array.

console.groupCollapsed("find the most frequent elem in an array")

let arr4 = [1, 2, 3, 4, 0, 1, 2, 2, 1, 10, 1, 2, 3, 10]
let freq = {};

arr4.forEach(function (i) {
    if (freq[i]) {
        freq[i]++;
    } else {
        freq[i] = 1;
    }
})
console.log(freq)

let maxFreq = 0;
let mostFreqElem;
for (let i in freq) {
    if (freq[i] > maxFreq) {
        maxFreq = freq[i];
        mostFreqElem = i;
    }
}
console.log(mostFreqElem)
console.groupEnd();
