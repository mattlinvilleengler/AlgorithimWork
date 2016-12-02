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

var stringChange = function (str, str2) {
    str = str.split("");
    str2 = str2.split("");
    var count = 0;
    if (str.length === str2.length) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] != str2[i]) {
                count++;
                if (count > 1) { return false }
            }
        }
    } else {
        if (str.length > str2.length) {
            count = stringOfDifferentLengths(str, str2);
        } else {
            count = stringOfDifferentLengths(str2, str);
        }
        if (count > 1) { return false }
    }
    return true
}

var stringOfDifferentLengths = function (str, str2) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != str2[i]) {
            str2.splice(i, 0, str[i]);
            count++;
            if (count > 1) { return count }
            i--;
        }
    }
    return count;
}

var stringCompression = function (str) {
    var newString = str.charAt(0);
    var count = 1;
    var prev = str.charAt(0);

    for (var i = 1; i < str.length; i++) {
        if (str[i] === prev) {
            count++
        } else {
            if (count > 1) {
                newString += count;
            }
            count = 1
            newString += str[i];
            prev = str[i];
        }
        if (i === str.length - 1 && count > 1) { newString += count }
    }
    return newString.length < str.length ? newString : str;
}

var rotateMatrix2 = function (matrix) {
    var newMatrix = [];
    var arr = [];
    for (var s = 0; s <= matrix.length - 1; s++) {
        arr = [];
        for (var i = matrix.length - 1; i >= 0; i--) {
            arr.push(matrix[i][s])
        }
        newMatrix.push(arr);
    };
    return newMatrix;
}
var zeroMatrix = function (matrix) {
    var zeroes = findZeroes(matrix);
    var mLength = matrix.length - 1;
    var yIndex = 0;
    var xIndex = 0;
    for (var x in zeroes.X) {
        while (yIndex <= mLength) {
            matrix[zeroes.X[x]][yIndex] = 0;
            yIndex++
        }
        yIndex = 0;
    }
    for (var y in zeroes.Y) {
        while (xIndex <= mLength) {
            matrix[xIndex][zeroes.Y[y]] = 0;
            xIndex++
        }
        xIndex = 0;
    }
    return matrix;
}

var findZeroes = function (matrix) {
    var zeroes = { X: {}, Y: {} };
    var matrixLength = matrix.length - 1, x = 0, y = 0;
    while (x <= matrixLength && y <= matrixLength) {
        if (matrix[y][x] === 0) {
            zeroes.X[x] = x;
            zeroes.Y[y] = y;
        }
        x++;
        if (x === matrixLength + 1) {
            y++;
            if (y !== matrixLength + 1) {
                x = 0;
            }
        };
    }
    return zeroes;
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
    {
        name: "String Change",
        func: stringChange,
        param: "xxxbbbcccfff",
        param2: "bbbfffcccxxx",
        expected: false
    },
    {
        name: "String Change",
        func: stringChange,
        param: "pale",
        param2: "ple",
        expected: true
    },
    {
        name: "String Change",
        func: stringChange,
        param: "pales",
        param2: "pale",
        expected: true
    },
    {
        name: "String Change",
        func: stringChange,
        param: "pale",
        param2: "bale",
        expected: true
    },
    {
        name: "String Compression",
        func: stringCompression,
        param: "aaaaaaaaaaabbbbbcccccffffffzzzzzaaaxxxTTTTTRRRRRZZZZZZZZZZZZZZZZzzzzzzzzz",
        expected: "a11b5c5f6z5a3x3T5R5Z16z9"
    },
    {
        name: "String Compression",
        func: stringCompression,
        param: "hemotoma",
        expected: "hemotoma"
    },
    {
        name: "Matrix Rotation",
        func: rotateMatrix2,
        param: [
            [0, 1],
            [3, 2]
        ],
        expected: [
            [3, 0],
            [2, 1]
        ],
    },
        {
        name: "Zero Matrix",
        func: zeroMatrix,
        param: [
            [0, 1, 1],
            [3, 2, 6],
            [5, 7, 4]
        ],
        expected: [
            [0, 0, 0],
            [0, 2, 6],
            [0, 4, 8]
        ],
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
        var sp = `<span style="display:block; margin-bottom: 5px; color: ${value === t.expected ? "cyan" : "maroon"}">${value === t.expected ? "PASSED" : "FAILED"}</span>`;
        console.log("name: " + t.name + "\nval: " + value + "\nexpected: " + t.expected + "\n\n")
        text.innerHTML += `<div style='margin: 20px;'>
         ${sp}${t.name.toUpperCase()}<br><br>
         val: ${value}<br>
         expected: ${t.expected}<br>`;
    });
    var hash = {};
    var count = 0;
    tests.forEach(x => {
        if (hash[x.name]) {
            hash[x.name]++
        } else {
            hash[x.name] = 1
            count++;
        }
    });
    text.innerHTML += `<div style="max-width: 500px;"><h3>${count} Algorithims Complete</h3><div>`
}

test(tests);
