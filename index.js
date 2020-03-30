function moneyCoins(money) {
  // your implementation code here
  xmoney = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  pecahan = []
  // console.log(xmoney[2])
  for(i=xmoney.length-1; i>=0; i--){
    // console.log(money)
      while(money>=xmoney[i]){
        money-=xmoney[i]
        pecahan.push(xmoney[i])
        // console.log(xmoney[i] + 'pecahan')
      }
    }
    return pecahan
  }

//driver code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

console.log(moneyCoins(7752));
//output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

//abaikan code dibawah ini
// module.exports = moneyCoins
