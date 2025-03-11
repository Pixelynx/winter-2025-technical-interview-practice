// Prompt for Lemonade Change
// You are running a lemonade stand and decide to sell lemonade for $5 per cup.
// Customers will be paying with either a $5 bill, a $10 bill, or a $20 bill.
// You need to provide the correct change to each customer.
// Return true if you can provide change to every customer, otherwise return false.


function canProvideChange(bills) {
    let bank = 0;
    // If no money in bank and bills are greater than 5
            // return false
        // If bill is 10 and bank has at least five subtract value from bank
        // If bill is 20 and bank has at least 15 subtract value
        // If we're able to give change to every customer, return true else false
    
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            bank+=5;
        }

        if (bills[i] === 10 && bank >= 5) {
            bank-=10;
        } else return false;

        if (bills[i] === 20 && bank >= 15) {
            bank-=20;
        } else return false;
    }
    return true;
}

console.log(canProvideChange([5]));

module.exports = canProvideChange;
