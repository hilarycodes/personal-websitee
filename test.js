// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function(s) {

// };
let s = "{[()]}";

if("{" !== "}")
{
    console.log("true");
}

const object = {
    "(": ")",
    "{": "}",
    "[": "]"
};
console.log(object["("]);
