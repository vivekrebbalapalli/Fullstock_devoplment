let salaries=[50000,60000,70000,80000]
let a=salaries.find(function(salaries){
    return salaries===60000 
})
console.log(a)
let b=salaries.findIndex(function(salaries){
    return salaries===60000 
})
console.log(b)



salaries.splice(1,1)
console.log(salaries)


//ASSINGNMENT 2

let cities=["HYD","MUM","CHENNAI","DELHI"]
let c=cities.find(function(cities){
    return cities==="CHENNAI" 
})
console.log(c)