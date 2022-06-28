function primeDividers(n){
    
    const dividersArr = (number) => { // get all dividers of number
        let result = [];
        for (let i = 2; i <= n; i++) {
            if (!result.includes(i) && number % i === 0) {
                result.push(i)
            }
        }
        return result;
    }

    const primesArr = (arr) => { // get only prime numbers of array
        return arr.filter((n)=>{
            if(n<3){
                return n > 1;
            }
            for(let i = 2;i<=Math.sqrt(n);i++){
                if(n % i === 0){
                    return false;
                }
            }
          return true;
        });
    }

    return primesArr(dividersArr(n));
}



console.log(primeDividers(15));
console.log(primeDividers(11));
console.log(primeDividers(12));