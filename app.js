const api_key = "64c5ebe0d71bf196b65463ced09bc351";

// fetch(
//   `https://api.openweathermap.org/data/2.5/weather?q=${"dhaka"}&appid=${api_key}`
// )
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//   get element

const input = document.querySelector("#input");
const submit = document.querySelector("#submit");
const city_name = document.querySelector("#name");
const temperature = document.querySelector("#temp");
const lead = document.querySelector("#lead");
const content = document.querySelector("#content");
const spinner = document.querySelector("#spinner");
const form = document.querySelector("form");

const weather = () => {
  !input.value
    ? alert(`enter a location`)
    : (spinner.classList.value = "spinner-border text-primary") &&
      content.classList.add("d-none");

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api_key}&units=metric`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const { name } = data;
      const { temp } = data.main;
      const { main } = data.weather[0];
      city_name.textContent = name;
      temperature.textContent = `${temp}`;
      lead.textContent = main;

      spinner.classList.value = "d-none spinner-border text-primary";
      content.classList.value = "";
    })
    .catch((err) => {
      alert("failed to fetch");
      spinner.classList.value = "d-none spinner-border text-primary";
      console.log(err);
    });
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  weather();
});
submit.addEventListener("click", () => {
  weather();
});
