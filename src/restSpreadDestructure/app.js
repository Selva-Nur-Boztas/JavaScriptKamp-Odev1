//rest
//params
//varArgs
let showProducts= function (id,...products) {
    console.log(id)
    console.log(products[0])
}
//console.log(typeof showProducts)
//showProducts(10,"elma","armut","karpuz")

//spread
let points=[5,8,12,54,24,95,2,10]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations=[10000,20000,30000,[40000,10000]]
let [small,medium,high,[veryhigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(maximum)

function somefunction([small1],number) {
    console.log(small1)
}
somefunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)