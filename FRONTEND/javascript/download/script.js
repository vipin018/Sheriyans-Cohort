let progress = document.getElementById("progress");
let btn = document.querySelector("button");
let percentage = document.getElementById("percentage");
let resetBtn = document.getElementById("resetBtn");
let growth = 0;

btn.addEventListener("click", () => {
  btn.disabled = true; // Disable button during download simulation
  let int = setInterval(() => {
    if (growth < 100) {
      growth++;
      percentage.innerHTML = growth + "%";
      progress.style.width = growth + "%";
    } else {
      clearInterval(int);
      percentage.innerHTML = "Download Complete!";
      progress.style.backgroundColor = "#00b509"; // Optional: Keep the green color
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";
    }
  }, Math.random() * 100);
});

resetBtn.addEventListener("click", () => {
  growth = 0;
  percentage.innerHTML = "0%";
  progress.style.width = "0%";
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.style.cursor = "pointer";
});
