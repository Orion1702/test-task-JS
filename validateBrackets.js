function validateBrackets(str) {
    const map = {'(':')', '{':'}', '[':']'};
    const depArr = ['{', '[', '(']
    
    s = str.split('').filter(el => Object.keys(map).includes(el) || Object.values(map).includes(el));

    const arr = [];
    for (let i = 0; i < s.length; i += 1) {
        if (map[s[i]]) {
            if (arr.length > 0 && depArr.indexOf(s[i]) < depArr.indexOf(arr[arr.length-1])){
                return false;
            } else {
                arr.push(s[i])
            }
        } else if (map[arr[arr.length - 1]] === s[i]) {
            arr.pop()
        } else {
            return false;
        }
    }
    return arr.length === 0;
};

console.log(validateBrackets('{asd}')); // true
console.log(validateBrackets('{[(asd)]}')); //true
console.log(validateBrackets('[{asd}]')); // false // order is not right
console.log(validateBrackets('[(asd])')); // false // there is closing medium bracket, but the last opening bracket is small
console.log(validateBrackets('{aaa[bbb(ccc)ddd]eee}')); // true