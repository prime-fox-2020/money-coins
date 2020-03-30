function moneyCoins(money) {
  // your implementation code here
  var uang=[10000,5000,2000,1000,500,200,100,50,20,10,1]
  var res=[]
  var angka=money
  for (let i = 0; i < uang.length; i++) {
      if(angka-uang[i]<0){
          continue
      }else {
          angka-=uang[i]
      }
      res.push(uang[i])
      if(angka-uang[i]>=0){
          i--
      }
  }
  return res
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
