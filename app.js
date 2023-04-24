const labels = ["mon","tue","wed","thu","fri","sat","sun"];
const data = [
  { day: "mon", amount: 17.45 },
  { day: "tue", amount: 34.91 },
  { day: "wed", amount: 52.36 },
  { day: "thu", amount: 31.07 },
  { day: "fri", amount: 23.39 },
  { day: "sat", amount: 43.28 },
  { day: "sun", amount: 25.48 },
];

const spans = document.querySelectorAll('.spans span');
const price = document.querySelectorAll(".price");

data.forEach((item, index) => {
  const day = item.day;
  const amount = item.amount.toFixed(2);
  const span = document.querySelector(`.${day} span`);
  spans.textContent = amount;
  price[index].textContent = amount;
});
