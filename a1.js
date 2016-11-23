'use strict'

//Check if a string has all unique characters
var isUnique = function (str) {
    var hash = {};
    var char;
    for (var i = 0; i < str.length; i++) {
        char = str.charAt(i).toLowerCase();
        if (hash[char]) {
            return false;
        } else {
            hash[char] = true;
        }
    }
    return true;
}

//Check if a string is a permutaion of the other
var isPermutation = function (str, str2) {
    if (str.length != str2.length) { return false };
    var hash = {};
    var char;
    for (var j = 0; j < str2.length; j++) {
        char = str2.charAt(j).toLowerCase();
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    for (var i = 0; i < str.length; i++) {
        char = str.charAt(i).toLowerCase();
        if (!hash[char]) {
            return false;
        } else {
            hash[char]--;
        }
    }
    return true;
}

var palindromePermutation = function (str) {
    var str = str.replace(" ", "");
    var hash = {};
    var oddCount = 0;
    var char;
    for (var i = 0; i < str.length; i++) {
        char = str.charAt(i).toLowerCase();
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }
    for (var key in hash) {
        if (hash[key] % 2 != 0) {
            oddCount++;
            if (oddCount > 1) {
                return false;
            }
        }
    }
    if (str.length % 2 === 0 && oddCount !== 0) {
        return false;
    }
    return true;
}

var stringChange = function(str, str2){
    
}


var tests = [
    {
        name: "is unique",
        func: isUnique,
        param: "howdy",
        expected: true
    },
    {
        name: "is unique",
        func: isUnique,
        param: "algorithim",
        expected: false
    },
    {
        name: "is permutation",
        func: isPermutation,
        param: "rac",
        param2: "car",
        expected: true
    },
    {
        name: "is permutation",
        func: isPermutation,
        param: "raca",
        param2: "cary",
        expected: false
    },
    {
        name: "is permutation",
        func: isPermutation,
        param: "xxxbbbcccfff",
        param2: "bbbfffcccxxx",
        expected: true
    },
    {
        name: "Palindrome Permutation",
        func: palindromePermutation,
        param: "howdy",
        expected: false
    },
    {
        name: "Palindrome Permutation",
        func: palindromePermutation,
        param: "race car",
        expected: true
    },
    {
        name: "Palindrome Permutation",
        func: palindromePermutation,
        param: "tact coa",
        expected: true
    },
];

var text = document.getElementById('tests');
var test = function (tests) {
    var value;
    tests.forEach(t => {
        if (t.param2) {
            value = t.func(t.param, t.param2);
        } else {
            value = t.func(t.param);
        }
        var sp = `<span style="color: ${value === t.expected ? "cyan" : "maroon"}">${value === t.expected ? "PASSED" : "FAILED"}</span>`;
        console.log("name: " + t.name + "\nval: " + value + "\nexpected: " + t.expected + "\n\n")
        text.innerHTML += `<div style='float:left; margin: 40px'>
         ${sp}<br>name: ${t.name}<br>
         val: ${value}<br>
         expected: ${t.expected}<br><br><br>`;
    })
}

test(tests);
