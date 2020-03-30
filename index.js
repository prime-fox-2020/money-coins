function moneyCoins(money) {
  // your implementation code here
  var result = []
  var coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  var counter = coins.length

  while (money > 0){
    if (money >= coins[counter]){
      result.push(coins[counter])
      money -= coins[counter]
    } else {
      counter --
    }
  }
  return result
}


//driver code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

// console.log(moneyCoins(5246));
// console.log(moneyCoins(3785));
// console.log(moneyCoins(91));
// console.log(moneyCoins(234));
//abaikan code dibawah ini
module.exports = moneyCoins
