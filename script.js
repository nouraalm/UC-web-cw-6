
function BMI(weight, height){
return(weight/height*height)
}

let result = BMI(50,160)

console.log(result)

function Status(BMI){
    
    if(BMI<18.5) {
        return "لديك نقص في الوزن";
    } else if(BMI>=18.5){
        return "وزنك صحي"
    } else if (BMI<25) {
        return "وزنك صحي" 
    } else if (BMI>=25) {
        return "ديك زيادة في الوزن"
    }

}

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmiResult = BMI(weight, height)
    let desc = Status(bmiResult)
    let result = document.getElementById("result").innerText
}


// let myinput = document.getElementById("input").value 
