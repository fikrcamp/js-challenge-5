console.log("hello");

function calculateSupply(age,amountperday){
    return `your will need ${age*amountperday} saanbuuse's to last you until the age of ${age}`
 }
 
 console.log(calculateSupply(52,2))
 let supply=calculateSupply(100,5)
 console.log(supply)
 console.log(calculateSupply(80,3))