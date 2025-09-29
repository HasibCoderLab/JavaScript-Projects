
    // Password generator logic
    const passwordGenerator = (length) => {
        const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
        const numberCaseChar = '1234567890';
        const symbolyCaseChar = '!@#$%&';
        const char = upperCaseChar + lowerCaseChar + numberCaseChar + symbolyCaseChar;
  
        let password = "";
  
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * char.length);
          password += char[randomIndex];
        }
  
        return password;
      };
  
      // Generate password and display in the output field
      function generatePassword() {
        const lengthInput = document.getElementById('length');
        const outputInput = document.getElementById('output');
        
        // Get user input for length
        const length = parseInt(lengthInput.value);
  
        if (isNaN(length) || length <= 0) {
          alert("Please enter a valid password length!");
          return;
        }
  
        // Generate and display password
        const password = passwordGenerator(length);
        outputInput.value = password;
      }