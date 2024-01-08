// Require the readline module for reading user input
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for the username and password
rl.question('Username: ', (username) => {
  rl.question('Password: ', (password) => {
    // Check if the username and password are valid
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
    } else {
      console.log('Invalid username or password!');
    }

    // Close the readline interface
    rl.close();
  });
});
