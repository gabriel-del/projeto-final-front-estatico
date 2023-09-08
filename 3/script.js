import Game from "./Game.js"
import Board from "./Board.js"
import Snake from "./Snake.js"

new Game(6)
new Board(30, 20, 20)
const snake2 = new Snake([{x: 2, y: 8}, {x: 12, y: 8}], ['a', 'w', 'd', 's'])
const snake1 = new Snake([{x: 2, y: 5}, {x: 4, y: 5}], ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'])


document.addEventListener('keydown', event => {
  if (event.code && !Game.running) Game.start()
  if (event.key === 'q') Game.stop()
})
