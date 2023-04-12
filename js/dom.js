
function calculate() {
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value;
    console.log(Number(num1) + Number(num2))

    let sum = Number(num1) + Number(num2)
    let resultbox = document.getElementById("result")
    resultbox.innerHTML = `sum of numbers=${sum}`
}