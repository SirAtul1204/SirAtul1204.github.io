let index = 0;
let animation = null;
let opacity = 0;

function imageChange(option) {
  const dir = "./images/projectImages/";
  let imageSourceList = [
    "flappy-bird.jpg",
    "bill-splitter.png",
    "air-hockey.png",
    "calculator.png",
    "message-bomber.png",
    "draw.png",
  ];

  let imageName = [
    "Flappy Bird",
    "Bill Splitter",
    "Air Hockey",
    "Calculator",
    "Message Bomber",
    "Draw",
  ];

  //Getting mainImage
  let mainImage = document.getElementById("mainImage");

  //Getting mainImageLink
  let mainImageTitle = document.getElementById("mainImageTitle");

  if (option === "next" && index < imageName.length - 1) {
    //Increasing Value of index
    index++;
  } else if (option === "prev" && index > 0) {
    //Decreasing value of index
    index--;
  }

  //Changing image source
  mainImage.src = dir + imageSourceList[index];

  //Changing innerHTML
  mainImageTitle.innerHTML = imageName[index];

  mainImage.style.opacity = opacity;
  mainImageTitle.opacity = opacity;
  animation = setInterval(fadeAnimaton, 100);
  opacity = 0;
}

function fadeAnimaton() {
  if (opacity === 1) {
    clearInterval(animation);
  } else {
    opacity += 0.2;
    mainImage.style.opacity = opacity;
    mainImageTitle.style.opacity = opacity;
  }
}

