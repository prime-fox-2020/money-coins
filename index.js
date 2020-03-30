function moneyCoins(money) {
  // your implementation code here
  var hasil = []
  var kamus = [10000, 5000, 2000, 1000, 500, 200, 50, 20, 10, 1]

  for (var i = 0; i < kamus.length; i++) {
    // console.log(kamus[i]);
    while (money >= kamus[i]) {
      money -= kamus[i]
      hasil.push(kamus[i])
      // console.log(hasil);
    }
  }
  return `Output : [${hasil}]`
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
