// Simulated status for demonstration purposes
const status = Math.random() < 0.5 ? 'Rejected' : 'Approved'; // Simulate rejection or approval

// Display status
document.getElementById('status').textContent = status;

// Show accept button if application is approved
if (status === 'Approved') {
  document.getElementById('acceptButton').style.display = 'block';
}

// Handle accept button click (you can modify this function based on your requirements)
document.getElementById('acceptButton').addEventListener('click', function() {
  // Perform action when the accept button is clicked
  alert('You have accepted the loan offer. Congratulations!');
  // Perform any further actions here, such as redirecting to another page
});
