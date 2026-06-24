//Let us target the button
var BMIButton=document.querySelector(".btn")
BMIButton.addEventListener("click", calculateBMI)

//Let us create the calculateBMI function
function calculateBMI(){
    var Firstname=document.querySelector("#Firstname").value
    var Lastname=document.querySelector("#Lastname").value
    var weight=document.querySelector("#mass").value
    var Height=document.querySelector("#Height").value
    var Result=document.querySelector(".Result")

    //lets calculate the BMI value
    BMI=weight/(Height*Height)
    BMI=BMI.toFixed(2)
    console.log(BMI)

    if(Firstname=="" || Lastname=="" || weight=="" ||   Height==""){
        Result.innerHTML="Please fill all field completely"
    }
    else{
        Result.innerHTML="Your BMI value is " + BMI +"kg/m<sup>2</sup>"
        if(BMI<18.5){
            Result.innerHTML="Your BMI value is " + BMI +"kg/m<sup>2</sup>. Eat healthy food to increase your daily calories gradually"
            Result.style.color="red"
        }else if(BMI>=18.5 && BMI<24.9){
              Result.innerHTML="Your BMI value is " + BMI +"kg/m<sup>2</sup>. Maintain your health by eating balanced diet while avoiding stress"
        }else if(BMI>=25 && BMI<29.9){
                Result.innerHTML="Your BMI value is " + BMI +"kg/m<sup>2</sup>. You are overweight avoid junk food and exercise properly"        
        }else if(BMI>=30){
            Result.innerHTML="Your BMI value is " + BMI +"kg/m<sup>2</sup>. You are obese. Please consult a doctor for advice."
            Result.style.color="red"
        }
    }
}