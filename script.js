const imageArray = [
  {
    name: "blue",
    img: "/Images/blue_back.jpg",
  },
  {
    name: "grey",
    img: "/Images/Gray_back.jpg",
  },
  {
    name: "green",
    img: "/Images/Green_back.jpg",
  },
  {
    name: "purple",
    img: "Images/purple_back.jpg",
  },
  {
    name: "red",
    img: "Images/red_back.jpg",
  },
  {
    name: "yellow",
    img: "Images/yellow_back.jpg",
  },
  {
    name: "blue",
    img: "Images/blue_back.jpg",
  },
  {
    name: "grey",
    img: "/Images/Gray_back.jpg",
  },
  {
    name: "green",
    img: "/Images/Green_back.jpg",
  },
  {
    name: "purple",
    img: "/Images/purple_back.jpg",
  },
  {
    name: "red",
    img: "/Images/red_back.jpg",
  },
  {
    name: "yellow",
    img: "/Images/yellow_back.jpg",
  },
];

const cardChosen = [];
const cardChoseId = [];
const cardsWon = [];

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    var card = document.createElement("img");
    card.setAttribute("src", "/images/honor_diamond.jpg");
    card.style.width = "100";
    card.style.height = "100";
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
}

// Check For Match
function checkForMatches() {
  const cards = document.querySelector("img");
  const matchOne = cardChoseId[0];
  const matchTwo = cardChoseId[1];
  if (cardChosen[0] === cardChosen[1]) {
    alert("Match Found");
    cards[matchOne].setAttribute("src", "/Images/AS.jpg");
    cards[matchTwo].setAttribute("src", "/Images/AS.jpg");
    cardsWon.push(cardChosen);
  } else {
    cards[matchOne].setAttribute("src", "/images/honor_diamond.jpg");
    cards[matchTwo].setAttribute("src", "/images/honor_diamond.jpg");
    alert("No Martch Found");
  }
}

// Flip Card
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(imageArray[cardId].name);
  cardChoseId.push(cardId);
  console.log(cardChosen);
  console.log(cardChoseId);
  this.setAttribute("src", imageArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatches, 500);
  }
}

createBoard();
