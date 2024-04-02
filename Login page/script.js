document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form data
    const formData = new FormData(this);
    
    // Process form data (e.g., send to server, validate, etc.)
    // You can use AJAX to send form data to the server for processing
    
    // For demonstration, let's log the form data to the console
    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  });
  