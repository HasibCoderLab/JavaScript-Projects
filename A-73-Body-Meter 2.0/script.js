document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const heightCombined = parseFloat(document.getElementById("heightFeet").value); // height in feet.inch
    const weight = parseFloat(document.getElementById("weight").value);
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
  
    const score = document.getElementById("score");
    const category = document.getElementById("category");
  
    if (!heightCombined || isNaN(heightCombined) || !weight || !age || !gender) {
      alert("Please fill in all fields.");
      return;
    }
  
    const feet = Math.floor(heightCombined);
    const inch = Math.round((heightCombined - feet) * 10); // convert decimal to inch
    const heightCm = ((feet * 12) + inch) * 2.54;
  
    const bmi = (weight / ((heightCm / 100) ** 2)).toFixed(1);
    score.textContent = bmi;
  
    let resultText = "";
    let color = "";
  
    if (bmi < 18.5) {
      resultText = "Underweight";
      color = "#f39c12";
    } else if (bmi < 25) {
      resultText = "Normal";
      color = "#27ae60";
    } else if (bmi < 30) {
      resultText = "Overweight";
      color = "#e67e22";
    } else {
      resultText = "Obese";
      color = "#e74c3c";
    }
  
    category.textContent = resultText;
    score.style.color = color;
    category.style.color = color;
  });
  