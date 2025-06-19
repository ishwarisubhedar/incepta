function submitSkills() {
  const teach = document.getElementById('teach').value.trim();
  const learn = document.getElementById('learn').value.trim();
  const status = document.getElementById('status-msg');

  if (!teach || !learn) {
    status.innerText = "Oops! Please fill in both fields 🥺";
    status.style.color = "#e45a84";
    return;
  }

  // Fake saving (until Firebase is set)
  console.log("Submitted:", { teach, learn });

  status.innerText = "Yay! Your skills have been noted 💖";
  status.style.color = "#5eaa60";

  // Clear inputs
  document.getElementById('teach').value = "";
  document.getElementById('learn').value = "";
}

