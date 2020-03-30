function moneyCoins(money) {
  // your implementation code here
  
  var listUang = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  var answer = []
  for (let i = 0; i < listUang.length; i++) {
    while (money >= listUang[i]) {
      money -= listUang[i]
      answer.push(listUang[i])
    }
  }
    return answer
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
