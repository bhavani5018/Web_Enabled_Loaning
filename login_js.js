document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Dummy authentication (replace with actual authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Check username and password (dummy example)
    if (username.trim() === '' && password.trim()==='')
     {
      alert("please fill the details");
      return false
    } 
    window.location.href='index.html';
    
  });
  