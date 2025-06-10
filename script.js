let daily_btn = document.querySelector(".daily-btn");
let weekly_btn = document.querySelector(".weekly-btn");
let monthly_btn = document.querySelector(".monthly-btn");

let daily = document.querySelectorAll(".daily");
let weekly = document.querySelectorAll(".weekly");
let monthly = document.querySelectorAll(".monthly");

let yesterday = document.querySelectorAll(".yesterday");
let last_week = document.querySelectorAll(".last-week");
let last_month = document.querySelectorAll(".last-month");

weekly.forEach((el) => el.classList.add("active"));
daily.forEach((el) => el.classList.remove("active"));
monthly.forEach((el) => el.classList.remove("active"));
last_week.forEach((el) => (el.innerHTML = "Last Week"));
weekly_btn.classList.add("active");

daily_btn.addEventListener("click", (e) => {
  e.preventDefault();
  daily.forEach((el) => el.classList.add("active"));
  weekly.forEach((el) => el.classList.remove("active"));
  monthly.forEach((el) => el.classList.remove("active"));
  yesterday.forEach((el) => (el.innerHTML = "Yesterday"));
  daily_btn.classList.add("active");
  weekly_btn.classList.remove("active");
  monthly_btn.classList.remove("active");
});

weekly_btn.addEventListener("click", () => {
  weekly.forEach((el) => el.classList.add("active"));
  daily.forEach((el) => el.classList.remove("active"));
  monthly.forEach((el) => el.classList.remove("active"));
  last_week.forEach((el) => (el.innerHTML = "Last Week"));
  weekly_btn.classList.add("active");
  daily_btn.classList.remove("active");
  monthly_btn.classList.remove("active");
});

monthly_btn.addEventListener("click", () => {
  monthly.forEach((el) => el.classList.add("active"));
  daily.forEach((el) => el.classList.remove("active"));
  weekly.forEach((el) => el.classList.remove("active"));
  last_month.forEach((el) => (el.innerHTML = "Last Month"));
  monthly_btn.classList.add("active");
  weekly_btn.classList.remove("active");
  daily.classList.remove("active");
});
