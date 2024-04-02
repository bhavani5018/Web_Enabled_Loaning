document.getElementById('documentType').addEventListener('change', function() {
  const selectedDocument = this.value;
  const documentDetails = document.getElementById('documentDetails');

  // Remove previously added inputs
  documentDetails.innerHTML = '';

  // Show the selected document details inputs
  switch (selectedDocument) {
    case 'Aadhar':
      documentDetails.innerHTML = `
        <div class="form-group">
          <label for="aadharNumber">Aadhar Number:</label>
          <input type="text" id="aadharNumber" name="aadharNumber" class="form-control" required>
        </div>
      `;
      break;
    case 'PAN':
      documentDetails.innerHTML = `
        <div class="form-group">
          <label for="panCardNumber">PAN Card Number:</label>
          <input type="text" id="panCardNumber" name="panCardNumber" class="form-control" required>
        </div>
      `;
      break;
    case 'Passport':
      documentDetails.innerHTML = `
        <div class="form-group">
          <label for="passportNumber">Passport Number:</label>
          <input type="text" id="passportNumber" name="passportNumber" class="form-control" required>
        </div>
      `;
      break;
    case 'DrivingLicense':
      documentDetails.innerHTML = `
        <div class="form-group">
          <label for="drivingLicenseNumber">Driving License Number:</label>
          <input type="text" id="drivingLicenseNumber" name="drivingLicenseNumber" class="form-control" required>
        </div>
      `;
      break;
    default:
      break;
  }

  // Show the document details section
  documentDetails.style.display = 'block';
});

document.getElementById('kycForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  // Get selected document type
  const selectedDocument = document.getElementById('documentType').value;
  
  // Get corresponding document number
  let documentNumber;
  switch (selectedDocument) {
    case 'Aadhar':
      documentNumber = document.getElementById('aadharNumber').value;
      break;
    case 'PAN':
      documentNumber = document.getElementById('panCardNumber').value;
      break;
    case 'Passport':
      documentNumber = document.getElementById('passportNumber').value;
      break;
    case 'DrivingLicense':
      documentNumber = document.getElementById('drivingLicenseNumber').value;
      break;
    default:
      alert('Please select a document type.');
      return;
  }
  
  // Dummy KYC verification (replace with actual API call for verification)
  setTimeout(() => {
    // Dummy response (replace with actual response handling)
    const verificationStatus = 'success'; // Simulate success
    
    if (verificationStatus === 'success') {
      alert('KYC document verified successfully. KYC Security Number (KN) issued.');
      // Redirect to the application status page after a delay
      setTimeout(() => {
        window.location.href = 'application_status.html';
      }, 2000); // Delay in milliseconds
    } else {
      alert('KYC document verification failed. Please try again.');
    }
  }, 2000); // Simulate delay for API call
  
});
