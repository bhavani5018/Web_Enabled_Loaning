document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Dummy authentication (replace with actual authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check username and password (dummy example)
    if (username === 'user' && password === 'password') {
      // Redirect to the Gold/Silver Loan Application website
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
  