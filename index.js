function bmi(){
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    let result = document.getElementById('result');

    const bmi = weight/(height/100 * height/100);
    const total = bmi.toFixed(2);
    result.innerText ="Your BMI is " + total;
    
}