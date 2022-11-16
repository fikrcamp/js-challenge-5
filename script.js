const calculateSupply = (age,amount) =>{
  let supply = age * amount;
  console.log(`You will need ${supply} to last you until the old age of ${age}`);
}

calculateSupply(52,2);
calculateSupply(20,10);
calculateSupply(23,6);
