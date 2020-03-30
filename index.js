function moneyCoins(money) {
  let res = []
  for (let i = 0; i < Infinity; i++) {
    if(money > 10000){
      res.push(10000);
      money %= 10000;
    }
    if(money > 5000){
      res.push(5000);
      money %= 5000;
    }
    if(money > 2000){
      res.push(2000);
      money %= 2000;
    }
    if(money > 1000){
      res.push(1000);
      money %= 1000;
    }
    if(money > 500){
      res.push(500);
      money %= 500;
    }
    if(money > 200){
      res.push(200);
      money %= 200;
    }
    if(money > 100){
      res.push(100);
      money %= 100;
    }
    if(money > 50){
      res.push(50);
      money %= 50;
    }
    if(money > 20){
      res.push(20);
      money %= 20;
    }
    if(money > 10){
      res.push(10);
      money %= 10;
    }
    if(money >= 1){
      res.push(1);
      money -= 1;
    }
    if(money === 0){
      return res;
    }
  }
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
