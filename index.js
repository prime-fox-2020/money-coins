function moneyCoins(money) {
  // your implementation code here
  let newArr = []
    while (money > 0) {
        if(money>10000){
            money-=10000
            newArr.push(10000)
        }else if(money>5000){
            money-=5000
            newArr.push(5000)
        }else if(money>2000){
            money-=2000
            newArr.push(2000)
        }else if(money>1000){
            money-=1000
            newArr.push(1000)
        }else if(money>500){
            money-=500
            newArr.push(500)
        }else if(money>200){
            money-=200
            newArr.push(200)
        }else if(money>100){
            money-=100
            newArr.push(100)
        }else if(money>50){
            money-=50
            newArr.push(50)
        }else if(money>20){
            money-=20
            newArr.push(20)
        }else if(money>10){
            money-=10
            newArr.push(10)
        }else if(money>=1){
            money-=1
            newArr.push(1)
        }
    }
    return newArr
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
