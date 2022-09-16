const player_X = "x";

const player_O = "o";

const WINNING_COMBITNATIONS = () => [
  [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][
    (2, 4, 6)
  ],
];

const cellElements = document.querySelectorAll("[data-cell]");
const boardElement = document.getElementById("board");
