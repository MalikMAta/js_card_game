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
    name: "blue",
    img: "/Images/Green_back.jpg",
  },
  {
    name: "blue",
    img: "Images/purple_back.jpg",
  },
  {
    name: "blue",
    img: "Images/red_back.jpg",
  },
  {
    name: "blue",
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
    name: "blue",
    img: "/Images/Green_back.jpg",
  },
  {
    name: "blue",
    img: "/Images/purple_back.jpg",
  },
  {
    name: "blue",
    img: "/Images/red_back.jpg",
  },
  {
    name: "blue",
    img: "/Images/yellow_back.jpg",
  },
];

const cardChosen = [];
const cardChoseId = [];

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    var id = document.createElement("img");
    id.setAttribute("src", "/images/honor_diamond.jpg");
    id.style.width = "100";
    id.style.height = "100";
    id.setAttribute("data-id", i);
    id.addEventListener("click", flipCard);
    grid.appendChild(id);
  }
}

// Flip Card

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(imageArray[cardId].name);
  cardChoseId.push(cardId);
  this.setAttribute("src", imageArray[cardId].img);
  if (cardChose.length > "2") {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatches() {
  const cards = document.querySelector("img");
  const matchOne = cardChoseId[0];
  const matchTwo = cardChoseId[1];
  if (cardChosen[0] == cardChosen[1]) {
    alert("Match Found");
  } else {
  }
}

createBoard();
