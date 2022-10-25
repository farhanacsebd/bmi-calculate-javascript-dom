const message = document.getElementById('message');

function bmi(){
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    let result = document.getElementById('result');

    const bmi = weight/(height/100 * height/100);
    const total = bmi.toFixed(2);
    result.innerText ="Your BMI is " + total;
    
    let report = showMessage(bmi);
    message.textContent = report;
}


function showMessage(result){

    if(result<16){
        return "You are Thin"
    }
    else if(result >=16 && result <=17){
        return "You are moderate thin"
    }
    else if(result >17 && result <=18.5){
        return "You are mid thin"
    }
    else if(result > 18.5 && result <=25){
        return "You are normal"
    }
    else if(result > 25){
        return "You are overweight"
    }
}