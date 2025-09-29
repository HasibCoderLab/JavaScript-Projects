document.getElementById("converterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
  
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const conversionType = document.querySelector('input[name="conversion"]:checked').value;
    let result = "";
  
    if (isNaN(temperatureInput)) {
      result = "Please enter a valid number!";
    } else if (conversionType === "cToF") {
      // Celsius to Fahrenheit
      result = `${(temperatureInput * 9/5 + 32).toFixed(2)}°F`;
    } else if (conversionType === "fToC") {
      // Fahrenheit to Celsius
      result = `${((temperatureInput - 32) * 5/9).toFixed(2)}°C`;
    }
  
    document.getElementById("result").textContent = result;
  });
  