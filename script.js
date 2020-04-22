const imageArray = [
  {
    name: "blue",
    img: "/images/blue_black.jpg",
  },
  {
    name: "grey",
    img: "/images/Gray_black.jpg",
  },
  {
    name: "blue",
    img: "/images/Gree_black.jpg",
  },
  {
    name: "blue",
    img: "/images/purple_black.jpg",
  },
  {
    name: "blue",
    img: "/images/red_black.jpg",
  },
  {
    name: "blue",
    img: "/images/yellow_black.jpg",
  },
];

const grid = document.querySelector(".grid");

function createBoard() {
  for (let i = 0; i < imageArray.length; i++) {
    var id = document.createElement("img");
    id.setAttribute("src", "/images/honor_diamond.jpg");
    id.style.width = "100%";
    id.style.height = "100%";
    id.setAttribute("data-id", i);
    grid.appendChild(id);
  }
}

createBoard();
