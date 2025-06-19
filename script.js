function submitSkills() {
  const teach = document.getElementById('teach').value.trim();
  const learn = document.getElementById('learn').value.trim();
  const status = document.getElementById('status-msg');
  const loader = document.getElementById('loader');

  // Validate inputs
  if (!teach || !learn) {
    status.innerText = "Please fill in both fields.";
    status.style.color = "#c94343";
    return;
  }

  // Show loader
  loader.style.display = "block";
  status.innerText = "";

  // Simulate loading (you can replace this with real Firebase code)
  setTimeout(() => {
    loader.style.display = "none";
    console.log("Submitted:", { teach, learn });

    // Show success
    status.innerText = "Skills submitted successfully.";
    status.style.color = "#4caf50";

    // Clear fields
    document.getElementById('teach').value = "";
    document.getElementById('learn').value = "";
  }, 1500);
}


