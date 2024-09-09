function calculateBMI(){
	const height = parseFloat(document.getElementById('height').value)/100;
	const weight = parseFloat(document.getElementById('weight').value);
	const bmi = (weight / (height * height)).toFixed(2);
	
	let resultText;
	
	if (bmi < 18.5) {
        resultText = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = `Your BMI is ${bmi}. You have a normal weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = `Your BMI is ${bmi}. You are overweight.`;
    } else {
        resultText = `Your BMI is ${bmi}. You are obese.`;
    }

    document.getElementById('bmiResult').textContent = resultText;
}