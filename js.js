const imageArray = [
  {
    name: "blue",
    img: "/images/blue_back.jpg",
  },
  {
    name: "blue",
    img: "/images/blue_back.jpg",
  },
  {
    name: "gray",
    img: "/images/Gray_back.jpg",
  },
  {
    name: "gray",
    img: "/images/Gray_back.jpg",
  },
  {
    name: "green",
    img: "/images/Green_back.jpg",
  },
  {
    name: "green",
    img: "/images/Green_back.jpg",
  },
  {
    name: "purple",
    img: "/images/purple_back.jpg",
  },
  {
    name: "purple",
    img: "/images/purple_back.jpg",
  },
  {
    name: "red",
    img: "/images/Red_back.jpg",
  },
  {
    name: "red",
    img: "/images/Red_back.jpg",
  },
  {
    name: "yellow",
    img: "/images/Yellow_back.jpg",
  },
  {
    name: "yellow",
    img: "/images/Yellow_back.jpg",
  },
];

const grid = document.querySelector(".grid");
cardsChosen = [];
cardIds = [];

function createGame() {
  for (let i = 0; i < imageArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "/images/honor_diamond.jpg");
    card.setAttribute("data-id", i);
    card.style.width = "100%";
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

function matchCards() {
  let cardImages = document.querySelectorAll("img");
  const cardOne = cardsChosen[0];
  const cardTwo = cardsChosen[1];
  if (cardOne === cardTwo) {
    alert("Match");
    cardImages[cardOne].setAttribute("src", "/images/honor_diamond.jpg");
    cardImages[cardTwo].setAttribute("src", "/images/honor_diamond.jpg");
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  //   console.log(cardId);
  cardsChosen.push(imageArray[cardId].name);
  console.log(cardsChosen);
  cardIds.push(cardId);
  this.setAttribute("src", imageArray[cardId].img);

  //   Simple check to see if they are a match
  //   if (cardsChosen[0] === cardsChosen[1]) {
  //     alert("Found a match");
  //   }
  if (cardsChosen.length == 2) {
    setTimeout(matchCards, 500);
  }
}

createGame();
