document.getElementById('loanForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Redirect to the KYC verification page
  window.location.href = 'kyc_verification.html';
});
