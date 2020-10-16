import "./styles.css";

const API_URL = "http://ip-api.com/json/";
const body = document.querySelector("body");

const getData = async () => {
  const div = document.createElement("div");
  div.innerText = "Loading ...";
  body.appendChild(div);

  const response = await fetch(API_URL);
  const data = await response.json();
  body.removeChild(div);

  const ul = document.createElement("ul");

  const country = document.createElement("li");
  country.innerHTML = `<div>Country : ${data.country}</div>`;
  const city = document.createElement("li");
  city.innerHTML = `<div>City : ${data.city}</div>`;
  const zip = document.createElement("li");
  zip.innerHTML = `<div>Zip Code : ${data.zip}</div>`;
  const timezone = document.createElement("li");
  timezone.innerHTML = `<div>Time-zone : ${data.timezone}</div>`;

  ul.appendChild(country);
  ul.appendChild(city);
  ul.appendChild(zip);
  ul.appendChild(timezone);

  body.appendChild(ul);
};

function init() {
  window.addEventListener("DOMContentLoaded", getData);
}

init();
