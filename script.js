console.log("hello");
function calculate_supply(age,amount_per_day){
    return age * amount_per_day * 365
}
const max_age = calculate_supply(52,2)
const max_age2 = calculate_supply(64,2)
const max_age3 = calculate_supply(58,2)
console.log(`you will need ${max_age} snack to last you until the old age of your life`);
console.log(`you will need ${max_age2} snack to last you until the old age of your life`);
console.log(`you will need ${max_age3} snack to last you until the old age of your life`);


