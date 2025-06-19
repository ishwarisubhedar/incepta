// script.js
function submitSkills() {
  const teach = document.getElementById('teach').value;
  const learn = document.getElementById('learn').value;

  if (!teach || !learn) {
    document.getElementById('status-msg').innerText = "Please fill both fields!";
    return;
  }

  // You don't need backend — just fake save it for now
  console.log("Teach:", teach);
  console.log("Learn:", learn);
  
  document.getElementById('status-msg').innerText = "Skills submitted!";
}
