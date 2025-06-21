document.getElementById("skillForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const teach = document.getElementById("teach").value.trim();
  const learn = document.getElementById("learn").value.trim();
  const status = document.getElementById("status-msg");
  const loader = document.getElementById("loader");

  if (!teach || !learn) {
    status.innerText = "Please enter both fields.";
    status.style.color = "#c94343";
    return;
  }

  loader.style.display = "block";
  status.innerText = "";

  setTimeout(() => {
    loader.style.display = "none";
    status.innerText = "Skills submitted successfully!";
    status.style.color = "#4caf50";

    document.getElementById("teach").value = "";
    document.getElementById("learn").value = "";
  }, 1500);
});
