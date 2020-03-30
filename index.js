function moneyCoins(money) {
  const value = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  let moneys = [];

  let i = 0;
  while (money > 0) {
    if (money >= value[i]) {
      debugger;
      money -= value[i];
      moneys.push(value[i]);
    } else {
      i++;
    }
  }
  return moneys;
}

//driver code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

//abaikan code dibawah ini
module.exports = moneyCoins

