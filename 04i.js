function amountTocoins(money, bills){
    if (bills[0] < bills[1]) bills.reverse();
    change = {};
    bills.map(b => {
       change[b] = Math.floor(money/b);
       money -= b*change[b];
    }) 
    return change
}

var change = amountTocoins(46, [25, 10, 5, 2, 1]);

console.log(change);