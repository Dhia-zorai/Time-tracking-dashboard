let buttons = document.querySelectorAll("button");

let daily = document.querySelectorAll(".daily");
let weekly = document.querySelectorAll(".weekly");
let monthly = document.querySelectorAll(".monthly");

let yesterday = document.querySelectorAll(".yesterday");
let last_week = document.querySelectorAll(".last-week");
let last_month = document.querySelectorAll(".last-month");

weekly.forEach((el) => el.classList.add("active"));
daily.forEach((el) => el.classList.remove("active"));
monthly.forEach((el) => el.classList.remove("active"));
document.getElementById("weekly").classList.add("active");
previous("weekly");

function activate(buttons, button) {
  buttons.forEach((el) => el.classList.remove("active"));
  button.classList.add("active");
}

function previous(id) {
  if (id == "daily") {
    yesterday.forEach((el) => (el.innerHTML = "Yesterday"));
  }

  if (id == "weekly") {
    last_week.forEach((el) => (el.innerHTML = "Last Week"));
  }

  if (id == "monthly") {
    last_month.forEach((el) => (el.innerHTML = "Last Month"));
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    weekly.forEach((el) => el.classList.remove("active"));
    daily.forEach((el) => el.classList.remove("active"));
    monthly.forEach((el) => el.classList.remove("active"));

    document
      .querySelectorAll("." + e.currentTarget.id)
      .forEach((el) => el.classList.add("active"));

    previous(e.currentTarget.id);
    activate(buttons, button);
  });
});
