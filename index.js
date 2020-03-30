function moneyCoins(money) {
  // your implementation code here
  let tenK = 10000;
  let fiveK = 5000;
  let twoK = 2000;
  let oneK = 1000;
  let fiveHun = 500;
  let twoHun = 200;
  let oneHun = 100;
  let fifty = 50;
  let twenty = 20;
  let ten = 10;
  let one = 1;
  let kotak = [];

  while(money >0){
    console.log(money)
    if(money >= tenK){
      money -= tenK
      kotak.push(tenK)
    }else if(money>=fiveK){
      money -= fiveK
      kotak.push(fiveK)
    }else if(money >= twoK){
      money -= twoK
      kotak.push(twoK)
    }else if(money >= oneK){
      money -= oneK
      kotak.push(oneK)
    }else if(money >= fiveHun){
      money -= fiveHun
      kotak.push(fiveHun)
    }else if(money >= twoHun){
      money -= twoHun
      kotak.push(twoHun)
    }else if(money >= oneHun){
      money -= oneHun
      kotak.push(oneHun)
    }else if(money >= fifty){
      money -= fifty
      kotak.push(fifty)
    }else if(money >=twenty){
      money -= twenty
      kotak.push(twenty)
    }else if(money >= ten){
      money -= ten
      kotak.push(ten)
    }else if(money >= one){
      money -= one
      kotak.push(one)
    }
  }
  return kotak
}

//driver code
console.log(moneyCoins(543));
//output : [ 500, 20, 20, 1, 1, 1 ]

 console.log(moneyCoins(7752));
// //output : [ 5000, 2000, 500, 200, 50, 1, 1 ]

console.log(moneyCoins(37454));
//output : [ 10000, 10000, 10000, 5000, 2000, 200, 200, 50, 1, 1, 1, 1 ]

//abaikan code dibawah ini
module.exports = moneyCoins
