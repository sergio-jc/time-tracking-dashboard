import data from "./data.json" assert { type: "json" };

let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

let daylyArray = data.map((e) => e.timeframes.daily);
let weeklyArray = data.map((e) => e.timeframes.weekly);
let monthlyArray = data.map((e) => e.timeframes.monthly);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

let secondSection = document.querySelector(".second-section");

drawElements(daylyArray)

dailyBtn.addEventListener("click", (event) => {
  drawElements(daylyArray);
});

weeklyBtn.addEventListener("click", (event) => {
  drawElements(weeklyArray);
});

monthlyBtn.addEventListener("click", (event) => {
  drawElements(monthlyArray);
});

function drawElements(array) {
  secondSection.innerHTML = "";
  array.forEach((e, i) => {

    let title = data[i].title
    let titleLowerCase = title.toLocaleLowerCase()
    if(titleLowerCase === "self care"){
        titleLowerCase = "self-care"
    }

    secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color:${bgColors[i]}">
              <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="">
            </div>
            <div class="card__details">
              <div class="card__activity">
                <p class="card__title">${title}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three_dots">
              </div>
              <div class="card__time">
                <p class="card__hour">${e.current}hrs</p>
                <p class="card__previous">Previous - ${e.previous}hrs</p>
              </div>
            </div>
          </div> 
        `;
  });
}
