let progress = document.getElementById("progress");
let downloadBtn = document.getElementById("downloadBtn");
let resetBtn = document.getElementById("resetBtn");
let percentage = document.getElementById("percentage");
let growth = 0;
let int;

downloadBtn.addEventListener("click", () => {
  downloadBtn.disabled = true;
  resetBtn.disabled = true; // Disable reset during download
  int = setInterval(() => {
    if (growth < 100) {
      growth++;
      percentage.innerHTML = growth + "%";
      progress.style.width = growth + "%";
    } else {
      clearInterval(int);
      percentage.innerHTML = "Download Complete!";
      progress.style.backgroundColor = "#00b509";
      resetBtn.disabled = false; // Enable reset after download
    }
  }, 40);
});

resetBtn.addEventListener("click", () => {
  clearInterval(int); // Stop any ongoing download
  growth = 0;
  percentage.innerHTML = "0%";
  progress.style.width = "0%";
  progress.style.backgroundColor = "#00b509";
  downloadBtn.disabled = false; // Enable download again
});
