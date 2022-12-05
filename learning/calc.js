var name = "royal"
function sum (a,b){

    return a + b
}
var user = {
    name: "royal",
    age: 20
}

//module.exports = name
//module.exports = sum
module.exports = {name, sum,user}
module.exports.add = (a,b,c)=>{

    return  a+ b + c / 3
}
module.exports.employee = "rajesh"