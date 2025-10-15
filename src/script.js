const txtWeatherElem = document.getElementById("weatherInput");
const btnChangeElem = document.getElementById("changeBtn");
const txtMessageElem = document.getElementById("message");

btnChangeElem.addEventListener("click", () => {
  let weather = txtWeatherElem.value.toLowerCase().trim();
  switch (weather) {
    case "sunny":
      sunnyImg();
      txtMessageElem.innerText = "It 's a bright and sunny day!";
      break;
    case "rainy":
      rainyImg();
      txtMessageElem.innerText = "Don't forget your umbrella!";
      break;
    case "cloudy":
      cloudyImg();
      txtMessageElem.innerText = "A calm and cloudy day";
      break;
    default:
      document.body.style.backgroundImage = "none";
      txtMessageElem.innerText = "Please enter sunny, rainy, or cloudy!";
  }
  txtWeatherElem.value = "";
});
sunnyImg = () => {
  document.body.style.backgroundImage =
    "url('https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?_gl=1*nccale*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NTk4OTgkajM4JGwwJGgw')";
};

rainyImg = () => {
  document.body.style.backgroundImage =
    "url('https://images.pexels.com/photos/1250672/pexels-photo-1250672.jpeg?_gl=1*la1e0p*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAyMjAkajM3JGwwJGgw')";
};

cloudyImg = () => {
  document.body.style.backgroundImage =
    "url('https://images.pexels.com/photos/7919/pexels-photo.jpg?_gl=1*uh7pk5*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAzMDMkajE1JGwwJGgw')";
};
